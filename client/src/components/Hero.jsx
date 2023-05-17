import React from 'react';
import { Container, Grid, Image, Header } from 'semantic-ui-react';
import Blob from '../assets/hero_blob.png'

const Hero = () => {
  return (
    <div className="hero-section">
      {/* removed padding from container, style={{ padding: '5em 0em' }} */}
      <Container > 
        <Grid>
          <Grid.Row>
            <Grid.Column floated='right' width={8} verticalAlign="bottom" >
              <Header as="h1" style={{ fontSize: '2em' }}>Welcome to the Hero Section</Header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec gravida nisi, vitae varius elit. Nulla eu
                scelerisque lacus, vitae efficitur velit. Curabitur
                sollicitudin justo vel justo efficitur, at pharetra turpis
                luctus.
              </p>
              {/* <button className="ui primary button">Get Started</button> */}
            </Grid.Column>
            <Grid.Column  floated='left' width={6}>
              <Image
                src={Blob}
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