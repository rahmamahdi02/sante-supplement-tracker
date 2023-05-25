import React, { useState } from "react";
import { Form, Button, Header, Table, Container } from "semantic-ui-react";
import Vitamincard from '../components/vitamincard';

const Calculator = () => {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [vitaminLevels, setVitaminLevels] = useState({});
  const [factsheetVitamin, setFactsheetVitamin] = useState(null);
  const [selectedVitamin, setSelectedVitamin] = useState("");

  // need another instance of state for thee selected vitamin for which the factsheet is being shown

  const handleSubmit = (e) => {
    e.preventDefault();

    if (sex === "female" && age > 18) {
      setVitaminLevels({
        "vitamin A": 5,
        "vitamin C": 5,
        "vitamin D": 5,
        "vitamin E": 5,
        vitaminK: 5,
        vitaminB1: 5,
        vitaminB2: 5,
        vitaminB3: 5,
        vitaminB6: 5,
        vitaminB12: 5,
        pantothenicAcid: 5,
        biotin: 5,
        folate: 5
      });
    } else {
      setVitaminLevels({});
    }
  };

  // add buttons in table 
  // onCLick => term for api to DSLD 
  // how if factsheet is a child of calculator how to send api call?
  
  // const showFactSheet = (vitamin) => {
  // //   setFactsheetVitamin(vitamin);
  // //   setSelectedVitamin(vitamin);
  // // };


  // use if else statement to toggle like with a coin flip
  const showFactSheet = (vitamin) => {
    if (factsheetVitamin === vitamin) {
      setFactsheetVitamin(null);
    } else {
      setFactsheetVitamin(vitamin);
    }
  };

  
  // here we need to do 2 things, first show the card, secound track the instand of that row button being called
  // so if 2 buttons are shown, 2 fact sheets are shown?

  return (
    <Container textAlign="center">
      <div>
        <Header as="h1">Vitamin Level Calculator</Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field required>
            <label>Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Field>
          <Form.Field required>
            <label>Sex</label>
            <select value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value="">-- Select --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </Form.Field>
          <Button type="submit">Calculate Vitamin Levels</Button>
        </Form>
        {Object.keys(vitaminLevels).length !== 0 && (
          <div>
            <Header as="h2">Vitamin Levels:</Header>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Vitamin</Table.HeaderCell>
                  <Table.HeaderCell>Level (mg)</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Object.keys(vitaminLevels).map((vitamin) => (
                  <Table.Row key={vitamin}> 
                    <Table.Cell>{vitamin}</Table.Cell>
                    <Table.Cell>{vitaminLevels[vitamin]}</Table.Cell>
                    <Table.Cell>
    {selectedVitamin === vitamin ? (
      <Button onClick={() => setSelectedVitamin("")}>Hide Factsheet</Button>
    ) : (
      <Button onClick={() => showFactSheet(vitamin)}>Show Factsheet</Button> // shoutout to ChatGPT for Logic?? Can I through into a Modal?
    )}
  </Table.Cell>

                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        )}
{factsheetVitamin && <Vitamincard vitamin={factsheetVitamin} />}
      </div>
    </Container>
  );
};

export default Calculator;