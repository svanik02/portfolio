import React, { useState } from "react";
import axios from "axios";
import "./REStyles.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "../components/Image";

function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  // Remove unnecessary state declarations here
  // You already have formData to store the form data

  const handleChange = (e) => {
    // You can handle form data changes in the setFormData function
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/portfolio", formData);

      // Handle success (e.g., show a success message or redirect)
      console.log("User registered successfully", response.data);

      // Reset the form
      setFormData({
        username: "",
        phone: "",
        email: "",
        password: "",
      });
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error("Registration failed", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="login-container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>User Name</label>
            <input
              type="text" // Use type "text" for username
              name="username" // Add a name attribute
              value={formData.username} // Use formData for value
              onChange={handleChange}
            />
            <label>Phone</label>
            <input
              type="text" // Use type "text" for phone
              name="phone" // Add a name attribute
              value={formData.phone} // Use formData for value
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </form>

          <Image heading="Register Here" text="Provide your details" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Registration;
