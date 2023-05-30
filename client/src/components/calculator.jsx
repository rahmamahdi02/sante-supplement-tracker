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

    if (gender === "Female" && age >= 18 || gender === "Male" && age >= 18  || gender === "Non-binary" && age >= 18  ) {
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