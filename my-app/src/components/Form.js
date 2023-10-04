import React from "react";
import "./Styles.css";
import  { useState } from 'react';
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [feedback ,setFeedBack] = useState("");
   
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const data = {
      name:name,
      email:email,
      subject:subject,
      feedback:feedback

    };
  
  try {
    const response = await axios.post("http://localhost:3000/portfolio", data);
    console.log(response);
    alert("Created");
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
  return(
<div className="container">
   <div className="form">
    <form onSubmit={handleSubmit}>
      <label>Your Name</label>
      <input type="text" value={name}
          onChange={(e) => setName(e.target.value) }></input>
      <label>Email</label>
      <input type="email"  value={email}
          onChange ={(e) => setEmail(e.target.value)}></input>
      <label>Subject</label>
      <input type="text"  value={subject}
          onChange ={(e) => setSubject(e.target.value)}></input>

      <textarea rows={6} placeholder="Type your message here"  value={feedback}
          onChange ={(e) => setFeedBack(e.target.value)}/>
      <button   className="btn" onClick={handleSubmit}>Submit</button>
    </form>
  </div>
  </div>
    
  );
  }

export default Form;