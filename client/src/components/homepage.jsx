
import React from 'react'

import {
    Button,
    Container,
    Header,
  } from 'semantic-ui-react'

  const Homepage = () => {


return (
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

export default Homepage;