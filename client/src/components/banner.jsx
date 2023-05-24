import React from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    Segment,
  } from 'semantic-ui-react'

  const Banner = () => {


    return (
    <div>

<Segment style={{ padding: '8em 0em' }} vertical>
<Grid container stackable verticalAlign='middle'>
  <Grid.Row>
    <Grid.Column width={8}>
      <Header as='h3' style={{ fontSize: '2em' }}>
        We Help Companies and Companions
      </Header>
    </Grid.Column>
    <Grid.Column floated='right' width={6}>
      <Image bordered rounded size='large' src='https://i.pinimg.com/564x/38/2c/73/382c736a597e0f58013e43fb50f14fea.jpg' />
    </Grid.Column>
  </Grid.Row>
  
</Grid>
</Segment>
</div>
  );
};

export default Banner;