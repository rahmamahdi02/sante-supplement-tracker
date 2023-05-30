import React, { useState } from "react";
import { Form, Button, Header, Table, Container } from "semantic-ui-react";
import Vitamincard from '../components/vitamincard';

const Calculator = () => {
  const [age, setAge] = useState("");
  const [gender, setgender] = useState("");
  const [vitaminLevels, setVitaminLevels] = useState({});
  const [factsheetVitamin, setFactsheetVitamin] = useState(null);
  const [selectedVitamin, setSelectedVitamin] = useState("");

  // need another instance of state for the selected vitamin for which the factsheet is being shown

  const handleSubmit = (e) => {
    e.preventDefault();

    if (gender === "female" && age > 18) {
      setVitaminLevels({
        "Vitamin A": "900 mcg",
        "Vitamin C": "90 mg",
        "Vitamin D": "20 ug",
        "Vitamin E": "15 mcg",
        "Vitamin K": "120 mcg" ,
        "Vitamin B1": "1.2 mg" ,
        "Vitamin B2": "1.3 mg",
        "Vitamin B3" : "1.6 mg",
        "Vitamin B6" : "400 mg" ,
        "Vitamin B12" : "2.4 mcg" ,
        "Pantothenic Acid" : "5 mg",
        "Choline" : "550 mg",
        "Biotin" : "30 mg",
        "Folate" : "25 mg",

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
            <label>gender</label>
            <select value={gender} onChange={(e) => setgender(e.target.value)}>
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
                  <Table.HeaderCell>FactSheet</Table.HeaderCell>

                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Object.keys(vitaminLevels).map((vitamin) => (
                  <Table.Row key={vitamin}> 
                    <Table.Cell>{vitamin}</Table.Cell>
                    <Table.Cell>{vitaminLevels[vitamin]}</Table.Cell>
                    <Table.Cell>
                    <h2> Source: Source: https://s3.amazonaws.com/public-inspection.federalregister.gov/2016-11867.pdf (pages 903-904) </h2>

    {selectedVitamin === vitamin ? (
      <Button onClick={() => showFactSheet("")}>Hide Factsheet</Button>
    ) : (
      <Button onClick={() => showFactSheet(vitamin)}>Show Factsheet</Button> 
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