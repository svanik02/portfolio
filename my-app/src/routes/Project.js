import React from 'react';
import NavBar from "../components/NavBar";
import Image from '../components/Image';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <NavBar/>
      <Work/>
      <Image heading="PROJECTS" text="Some of my most recent work"/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project;