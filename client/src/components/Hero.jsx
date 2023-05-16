import React from 'react';
import { Container, Grid, Image, Header } from 'semantic-ui-react';
import HeroImage from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} computer={8}>
              <Header as="h1">Welcome to the Hero Section</Header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec gravida nisi, vitae varius elit. Nulla eu
                scelerisque lacus, vitae efficitur velit. Curabitur
                sollicitudin justo vel justo efficitur, at pharetra turpis
                luctus.
              </p>
              <button className="ui primary button">Get Started</button>
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <Image
                src={HeroImage}
                alt="Hero Image"
                size="large"
                rounded
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;