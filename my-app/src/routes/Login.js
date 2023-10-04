import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./REStyles.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "../components/Image";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/portfolio", {
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        // Successfully logged in, navigate to the home page or a dashboard
        navigate("/");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError("An error occurred during login. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="login-container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Submit"}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
          <Image heading="Login" text="Login with email and password" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Login;
