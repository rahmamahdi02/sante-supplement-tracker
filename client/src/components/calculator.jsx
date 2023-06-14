import React, { useState, useEffect } from "react";
import { Form, Button, Header, Table, Container } from "semantic-ui-react";
import Vitamincard from '../components/vitamincard';

const Calculator = () => {
  const [age, setAge] = useState("");
  const [gender, setgender] = useState("");
  const [vitaminLevels, setVitaminLevels] = useState({});
  const [factsheetVitamin, setFactsheetVitamin] = useState(null);
  const [tableValues, setTableValues] = useState(false);

  const [selectedVitamin, setSelectedVitamin] = useState(""); // why isn't this being used, to show modal

  // need another instance of state for the selected vitamin for which the factsheet is being shown


useEffect(() => {

 fetch("/api/RDA")

  .then(response => response.json())
  .then(data => setVitaminLevels(data))
  .catch(error => console.log("Error", error)); // semicolon to end statement

}, []); // Want to have UseEffect only render once.. add a dependency array that is empty 1x //If you add any variables to dependency array the UseEffect will rerender anytime those variables change in compoenent


  const handleSubmit = (e) => {
    e.preventDefault();
    if (gender === "Female" && age >= 4 || gender === "Male" && age >= 4  || gender === "Non-binary" && age >= 4  ) {
   setTableValues(true); // boolean that keeps track to show if conditions were met
   
    } else {
      setVitaminLevels({});
    }
  };




  const showFactSheet = (vitamin) => {
    if (factsheetVitamin === vitamin) {
      setFactsheetVitamin(null);
    } else {
      setFactsheetVitamin(vitamin);
    }
  };




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
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>

            </select>
          </Form.Field>

          <Button type="submit">Calculate Vitamin Levels</Button>
        </Form>
        { tableValues && (
          <div>
            <Header as="h2">Vitamin Levels:</Header>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Vitamin</Table.HeaderCell>
                  <Table.HeaderCell>Dosage</Table.HeaderCell>
                  <Table.HeaderCell>Unit</Table.HeaderCell>
                  <Table.HeaderCell>FactSheet</Table.HeaderCell>

                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Object.keys(vitaminLevels).map((vitamin) => (
                  <Table.Row key={vitamin}> 
                    <Table.Cell>{vitamin}</Table.Cell>
                    <Table.Cell>{vitaminLevels[vitamin].Value}</Table.Cell>
                    <Table.Cell>{vitaminLevels[vitamin].Unit}</Table.Cell>

                    <Table.Cell>

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
            <h4> Source : <a href="https://s3.amazonaws.com/public-inspection.federalregister.gov/2016-11867.pdf"> (Food and Drug Administration, Food Labeling: Revision of the Nutrition and Supplement Facts Labels) </a></h4>
          </div>
        )}
{factsheetVitamin && <Vitamincard vitamin={factsheetVitamin} />}
      </div>
    </Container>
  );
};

export default Calculator;