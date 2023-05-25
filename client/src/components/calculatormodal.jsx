import React, { useState } from "react";
import { Modal, Form, Table } from "semantic-ui-react";

const VitaminB6ModalForm = () => {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [vitaminB6Level, setVitaminB6Level] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((sex === "male" || sex === "female") && age < 18) {
      setVitaminB6Level(0.5);
    } else if ((sex === "male" || sex === "female") && age >= 19 && age <= 50) {
      setVitaminB6Level(1.3);
    } else if (sex === "female" && age > 50) {
      setVitaminB6Level(1.5);
    } else if (sex === "male" && age > 50) {
      setVitaminB6Level(1.5);
    } else {
      setVitaminB6Level(null);
    }
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Modal textAlign="center"
      trigger={<button onClick={handleModalOpen}>Open Vitamin B6 Calculator</button>}
      open={modalOpen}
      onClose={handleModalClose}
    >
      <Modal.Header>Vitamin B6 Level Calculator</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field required>
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Field>
          <Form.Field required>
            <label>Sex:</label>
            <select value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value="">-- Select --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </Form.Field>
          <Form.Button type="submit">Calculate Vitamin B6 Level</Form.Button>
        </Form>
        {vitaminB6Level !== null && (
          <div>
            <h3>Vitamin B6 Level:</h3>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Sex</Table.HeaderCell>
                  <Table.HeaderCell>Age</Table.HeaderCell>
                  <Table.HeaderCell>Level (mg)</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>{sex}</Table.Cell>
                  <Table.Cell>{age}</Table.Cell>
                  <Table.Cell>{vitaminB6Level}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        )}
      </Modal.Content>
    </Modal>
  );
};

export default VitaminB6ModalForm;
