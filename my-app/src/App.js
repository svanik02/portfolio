import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import {Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import FeedBack from "./routes/FeedBack";
import Form from "./components/Form";
import Login from "./routes/Login";
import Registration from "./routes/Registration";


function App() {
  return (
   <>
    
     <Routes>
      <Route path="/navbar" element={<NavBar/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/form" element={<Form/>}/>
      <Route path="/feedback" element={<FeedBack/>}/>
      <Route path="/footer" element={<Footer/>}/>
     

     </Routes>
    </>
  );
}

export default App;
