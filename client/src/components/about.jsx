import React from 'react'
import {
    Container,
    Divider,
    Grid,
    Header,
    Segment,
  } from 'semantic-ui-react'
  import BlobAnimation from './BlobAnimation';
  import VitaminB6ModalForm from '../components/calculatormodal';
  import Calculator from '../components/calculator';

  const about = () => {


    return (
    <div>

<Segment style={{ padding: '6em 0em' }} vertical>
<Grid container stackable verticalAlign='middle'>
  <Grid.Row>
    <Grid.Column width={8}>
    
      <Header as='h3' style={{ fontSize: '2.2em' }}>
..You Probaly Have A Nutrient Gap ..    </Header>
      <p style={{ fontSize: '1.53em' }}>
      Most Americans aren't getting the recommended daily intakes of crucial vitamins and minerals essential for physical & mental health with approximately 85% falling short according to the FDA.      </p>
      <Header as='h3' style={{ fontSize: '2em' }}>
        What our my Recommended Daily Allowance (RDA)?
      </Header>
      <p style={{ fontSize: '1.53em' }}>
Half of Americans over the age of 20, report taking a daily supplement (NCHS Data Brief 2018).
      </p>

      <p style={{ fontSize: '1.53em' }}>
Get rid of the confusion about how much Vitamin C, you should be taking by getting easy to understand info tailored to your body!
      </p>

    </Grid.Column>
    <Grid.Column floated='right' width={6}>
      {/* <Image bordered rounded size='large' src='https://i.pinimg.com/564x/38/2c/73/382c736a597e0f58013e43fb50f14fea.jpg' /> */}
      < BlobAnimation />
    </Grid.Column>
  </Grid.Row>
  <Grid.Row>
    <Grid.Column textAlign='center'>
    </Grid.Column>
  </Grid.Row>
</Grid>
</Segment>



<Segment style={{ padding: '4em 0em' }} vertical>
  
<Container text>
  <Divider
    as='h4'
    className='header'
    horizontal
    style={{ margin: '2em 0em', textTransform: 'uppercase' }}
  >
    <a href='#'>RDA VALUES</a>
  </Divider>


  <Header as='h3' style={{ fontSize: '2em' }} centered>
    
    Try the Personalized RDA Values Calculator
  </Header>

  
  <p style={{ fontSize: '1.33em' }}>
  Input your age and gender to calculate your RDA Vitamin B6 levels. Get instant results displayed in a table, presenting the appropriate Vitamin B6 level based on your age and gender based off FDA Guidelines.

  </p>

   <VitaminB6ModalForm />

   <Divider
    as='h4'
    className='header'
    horizontal
    style={{ margin: '2em 0em', textTransform: 'uppercase' }}
  >
    <a href='#'>Important Disclaimer</a>
  </Divider>

  <Header as='h3' style={{ fontSize: '2em' }}>
Consult With Your Healthcare Provider  </Header>
  <p style={{ fontSize: '1.33em' }}>
  It's important to note that the RDAs are just a starting point. Some people may need more or less of a particular nutrient depending on their individual circumstances, such as their activity level, health status, and dietary preferences. It's always a good idea to talk to your doctor or a registered dietitian to determine your individual nutrient needs.
  </p>

</Container>
</Segment>

<Segment style={{ padding: '2em 0em' }} vertical>
<Container>
<Calculator />
</Container>
</Segment>

</div>
  );
};

export default about;