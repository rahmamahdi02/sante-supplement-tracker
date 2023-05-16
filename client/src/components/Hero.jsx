import React from 'react';
import Logo from '../assets/santelogo.png'

const Hero = () => {
  const sectionStyle = {
    backgroundImage: '../assets/hero-background.png',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '1920px',
    height: '740px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%'
  };

  const textStyle = {
    textAlign: 'center'
  };

  const headingStyle = {
    color: 'white',
    fontSize: '36px'
  };

  return (
    <div className="hero" style={sectionStyle}>
      <div className="hero-content" style={contentStyle}>
        <div className="hero-text" style={textStyle}>
          <h1 style={headingStyle}>Welcome to My Website</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;