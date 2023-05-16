import React from 'react';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: 'url(path/to/image.jpg)' }}>
      <div className="hero-content">
        <h1>IMAGINE A COMPANY</h1>
        <p>Explore and discover amazing things.</p>
        <a href="https://www.example.com" className="hero-button">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;
