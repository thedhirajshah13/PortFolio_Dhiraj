import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <Container style={{padding: '60px'}}>
      <SEO
        title="Contact & Connect | Dhiraj Shah"
        description="Get in touch with Dhiraj Shah for full-stack development, backend engineering roles, freelance collaborations, or technical consultations."
        keywords="Contact Dhiraj Shah, Hire Full Stack Developer, Node.js Engineer Contact, MERN Stack Developer Delhi"
        canonicalPath="/contact"
      />
      <Particle />
      <ContactForm />
      <Social />
    </Container>
  )
}

export default Contact