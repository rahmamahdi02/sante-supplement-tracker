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
  import BlobAnimation from './BlobAnimation';
  import VitaminB6ModalForm from '../components/calculatormodal';

  const about = () => {


    return (
    <div>

<Segment style={{ padding: '6em 0em' }} vertical>
<Grid container stackable verticalAlign='middle'>
  <Grid.Row>
    <Grid.Column width={8}>
    
      <Header as='h3' style={{ fontSize: '2.2em' }}>
..You Probally Have A Nutrient Gap ..    </Header>
      <p style={{ fontSize: '1.53em' }}>
      Most Americans aren't getting the recommended daily intakes of crucial vitamins and minerals essential for physical & mental health with approximately 85% falling short according to the FDA.      </p>
      <Header as='h3' style={{ fontSize: '2em' }}>
        What our my Recommended Daily Allowance (RDA)?
      </Header>
      <p style={{ fontSize: '1.53em' }}>
Half of Americans over the age of 20, report taking a daily supplement. (NCHS Data Brief 2018) Get rid of the confusion about how much Vitamin C, you should be taking by getting easy to understand info taiored to your body.
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

<Segment style={{ padding: '0em' }} vertical>
<Grid celled='internally' columns='equal' stackable>
  <Grid.Row textAlign='center'>
    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
      <Header as='h3' style={{ fontSize: '2em' }}>
        "What a Company"
      </Header>
      <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
    </Grid.Column>
    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
      <Header as='h3' style={{ fontSize: '2em' }}>
        "I shouldn't have gone with their competitor."
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        {/* APPLE: REMOVE OR IMPORT IMAGE <Image avatar src='/images/avatar/large/nan.jpg' /> */}  
        <b>Nan</b> Chief Fun Officer Acme Toys
      </p>
    </Grid.Column>
  </Grid.Row>
</Grid>
</Segment>

<Segment style={{ padding: '8em 0em' }} vertical>
<Container text>
  <Header as='h3' style={{ fontSize: '2em' }}>
Consult With Your Healthcare Provider  </Header>
  <p style={{ fontSize: '1.33em' }}>
  It's important to note that the RDAs are just a starting point. Some people may need more or less of a particular nutrient depending on their individual circumstances, such as their activity level, health status, and dietary preferences. It's always a good idea to talk to your doctor or a registered dietitian to determine your individual nutrient needs.

  </p>
 
  <Divider
    as='h4'
    className='header'
    horizontal
    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
  >
    <a href='#'>RDA VALUES</a>
  </Divider>

  <Header as='h3' style={{ fontSize: '2em' }}>
    Get Your Personalized RDA Values Below
  </Header>
  <p style={{ fontSize: '1.33em' }}>
    Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
    it's really true. It took years of gene splicing and combinatory DNA research, but our
    bananas can really dance.
  </p>
  {/* <Button as='a' size='large'>
    I'm Still Quite Interested
  </Button> */}
   <VitaminB6ModalForm />
</Container>
</Segment>
</div>
  );
};

export default about;