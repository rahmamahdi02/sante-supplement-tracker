import React from 'react'
import {
    Button,
    Container,
    Header,
    Icon
  } from 'semantic-ui-react'
  import Background from '../assets/hero-background.png'



const Hero = () => { (
  <div>


  <Container text>
      <Header
        as='h1'
        content='Imagine-a-Company'
        inverted
        style={{
          fontWeight: 'normal',
         
        }}
      />
      <Header
        as='h2'
        content='Do whatever you want when you want to.'
        inverted
        style={{
          fontWeight: 'normal',
        }}
      />
      <Button primary size='huge'>  </Button>
    </Container>
  
  
  </div>
  
  );
};

export default Hero;