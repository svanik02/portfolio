import React from 'react'
import NavBar from "../components/NavBar";
import Image from '../components/Image';
import Footer from '../components/Footer';
import Form from '../components/Form';


const Contact = () => {
  return (
    <div>
       <NavBar/>
       <Form/>
       <Image heading="CONTACT" text="Let's have a chat"/>
       
       
       <Footer/>
      
    </div>
  )
}

export default Contact;