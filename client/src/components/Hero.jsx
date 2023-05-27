import React from 'react';
import {Grid, Image, Header, Segment, Button} from 'semantic-ui-react';
import SignupButton from "../components/SignupButton";


const Hero = () => {
  return (
    <div className="hero-section">


<Segment style={{ padding: '8em 0em' }} vertical>
<Grid container stackable verticalAlign='middle'>
  <Grid.Row>
    <Grid.Column width={8}>
      <Header as='h1' style={{ fontSize: '4em' }}>
       Calculate Your Vitamin Dosages
      </Header>
      <p style={{ fontSize: '1.53em' }}>
      Sante is an easy to use application that generates personalized Recommended Daily Allowance (RDA) for over 20 essential vitamins and minerals.
      </p>
 
    </Grid.Column>
    <Grid.Column floated='right' width={6}>
      <Image bordered rounded size='large' src='https://i.pinimg.com/564x/38/2c/73/382c736a597e0f58013e43fb50f14fea.jpg' />
    </Grid.Column>
  </Grid.Row>
  <Grid.Row>
    <Grid.Column textAlign='center'>
    </Grid.Column>
  </Grid.Row>
</Grid>
</Segment>


    </div>
  );
};

export default Hero;