import React from 'react';
import { Container, Grid, Image, Header, Segment, Button} from 'semantic-ui-react';
import Blob from '../assets/hero_blob.png'
import BlobAnimation from './BlobAnimation';

const Hero = () => {
  return (
    <div className="hero-section">


<Segment style={{ padding: '8em 0em' }} vertical>
<Grid container stackable verticalAlign='middle'>
  <Grid.Row>
    <Grid.Column width={8}>
      <Header as='h1' style={{ fontSize: '5em' }}>
        We Help Companies and Companions
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        We can give your company superpowers to do things that they never thought possible.
        Let us delight your customers and empower your needs... through pure data analytics.
      </p>
      
    </Grid.Column>
    <Grid.Column floated='right' width={6}>
      <Image bordered rounded size='large' src='https://i.pinimg.com/564x/38/2c/73/382c736a597e0f58013e43fb50f14fea.jpg' />
    </Grid.Column>
  </Grid.Row>
  <Grid.Row>
    <Grid.Column textAlign='center'>
      <Button size='huge'>Sign Up Now</Button>
    </Grid.Column>
  </Grid.Row>
</Grid>
</Segment>

    </div>
  );
};

export default Hero;