import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Offer from "./components/Offer";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">  
        <Container>
          <Navigation/>
        </Container>

        <Hero/>

        <Container>
          <AboutMe/>
          <Offer/>
          <Contact/> 
          <Footer/>
        </Container> 
    </div>
  )
}

export default App;
