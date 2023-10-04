import React from 'react'
import NavBar from "../components/NavBar";
import Image from '../components/Image';
import Footer from '../components/Footer';
import AboutContent from "../components/AboutContent"

const About = () => {
  return (
    <div>
       <NavBar/>
       <Image heading="ABOUT" text=
          "A portfolio app is a digital platform designed for individuals, professionals, or businesses to showcase their work, achievements, skills, and experiences in a visually appealing and organized manner.Typically used by artists, designers, photographers, writers, web developers, and professionals from various fields, a portfolio app serves as a dynamic, interactive, and accessible representation of one's body of work.Users can create and customize their portfolios by adding projects, images, descriptions, and links to their best work, providing a comprehensive overview of their capabilities.These apps often offer features like categorization, filtering, and search functionality, allowing visitors to easily navigate and explore the showcased content.Portfolio apps are invaluable tools for self-promotion, job hunting, client acquisition, and networking, as they enable individuals to make a strong impression and effectively communicate their expertise to a global audience."
          />
        <AboutContent/>
       <Footer/>

      
    </div>
  )
}

export default About;