import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Logo from '../assets/santelogo.png'


const HeroSection = () => {

  const heroStyle = {
    src={Logo}
    backgroundize: 'cover',
    backgroundPosition: 'center',
    height: '740px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="hero-section" style={heroStyle}>
      <Container text>
        <Header as="h1" inverted>
          Welcome to the Hero Section
        </Header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec gravida nisi, vitae varius elit. Nulla eu
          scelerisque lacus, vitae efficitur velit. Curabitur
          sollicitudin justo vel justo efficitur, at pharetra turpis
          luctus.
        </p>
        <button className="ui primary button">Get Started</button>
      </Container>
    </div>
  );
};

export default HeroSection;