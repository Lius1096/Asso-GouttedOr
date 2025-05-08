import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';
import MesValeurs from '../components/Valeurs';
import Services from '../components/Services';
import Skills from '../components/Skills';
//import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
//import References from '../components/References';
import Article from '../components/Article'



const Home = () => {
  return (
    <>
   
      <Hero />
      <Skills/>
      <MesValeurs/>
      <Testimonials/>
      <Portfolio />
      <Services/>
      
      <Article/>
      
      <ContactForm/>
      
    
      
    </>
  );
}

export default Home;
