import React, { useState } from "react";
import { Form, Button, Header, List } from "semantic-ui-react";

const Calculator = () => {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [vitaminLevels, setVitaminLevels] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (sex === "female" && age > 18) {
      setVitaminLevels({
        vitaminA: 5,
        vitaminC: 5,
        vitaminD: 5,
        vitaminE: 5,
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

  return (
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
          <List>
            {Object.keys(vitaminLevels).map((vitamin) => (
              <List.Item key={vitamin}>
                <strong>{vitamin}:</strong> {vitaminLevels[vitamin]} mg
              </List.Item>
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default Calculator;