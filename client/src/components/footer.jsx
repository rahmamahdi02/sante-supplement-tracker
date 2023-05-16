import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';

const footer = () => {
  return (
    <div style={{ background: 'orange', padding: '2em 0' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted>About</Header>
              <List inverted link>
                <List.Item as='a'>Company</List.Item>
                <List.Item as='a'>Team</List.Item>
                <List.Item as='a'>Careers</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted>Products</Header>
              <List inverted link>
                <List.Item as='a'>Product 1</List.Item>
                <List.Item as='a'>Product 2</List.Item>
                <List.Item as='a'>Product 3</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted>Contact</Header>
              <List inverted link>
                <List.Item as='a'>Email</List.Item>
                <List.Item as='a'>Phone</List.Item>
                <List.Item as='a'>Address</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>

  );
};

export default footer;