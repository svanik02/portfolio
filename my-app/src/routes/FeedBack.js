import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/FeedbackStyle.css";
import NavBar from "../components/NavBar";
import Image from '../components/Image';
import Footer from '../components/Footer';


function FeedBack() {
  const [portfolios, setPortfolios] = useState([]);
 

  useEffect(() => {
    fetchData();
  });


  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/portfolio");
      setPortfolios(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  const deletedata = (id) => {
    axios.delete(`http://localhost:3000/portfolio/${id}`, deletedata)
  };


  return (
    <div><NavBar/>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>FeedBack</th>
            
          </tr>
        </thead>
        <tbody>
          {portfolios.map((portfolio) => {
            return (
              <tr key={portfolio._id}>
                <td>{portfolio.name}</td>
                <td>{portfolio.email}</td>
                <td>{portfolio.subject}</td>
                <td>{portfolio.feedback}</td>
                
                {/* <button className="edit-btn" onClick={() =>{updatedata(student._id)}}>Edit</button> */}
                <button className="delete-btn" onClick={() =>{deletedata(portfolio._id)}}>Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Image heading="FeedBack" text="FeedBack's Of Users"/>
      <Footer/>
    </div>
    </div>
  );
}


export default FeedBack;