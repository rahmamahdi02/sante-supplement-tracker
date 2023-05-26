import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const footer = () => {
  return (
    <div >
          <Segment inverted vertical style={{ background: 'dark', padding: '8em 0em' }}>
          <Container>

          <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Home' />
              <List link inverted>
                <List.Item as='a'>Login</List.Item>
                <List.Item as='a'>Logout</List.Item>
                <List.Item as='a'>Calculator</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Dashboard' />
              <List link inverted>
              <List.Item as='a'>Profile</List.Item>
                <List.Item as='a'>Calculator</List.Item>
                <List.Item as='a'>Factsheet</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
              Copyright @ 2023 Sante Wellness            </Header>
              <p>
              Developed by Rahma Mahdi, Techtonica H-1 2023 Cohort   </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    </div>

  );
};

export default footer;