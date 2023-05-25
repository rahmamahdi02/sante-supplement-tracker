import React, { useState } from "react";
import { Modal, Form, Table, Button, Header, Icon} from "semantic-ui-react";

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
      setVitaminB6Level("Speak with a Healthcare Professional");
    }
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Modal 

    trigger={
        <Button onClick={() => {
          handleModalOpen();
          dispatch({ type: 'open', size: 'small' });
        }}>
          Try Vitamin B6 Calculator
        </Button>
      }
            
      open={modalOpen}
      onClose={handleModalClose}
      className="centered-modal"
      onClick={() => dispatch({ type: 'open', size: 'small' })}
    >
      <Header>Vitamin B6 Level Calculator</Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
        <p> Input your age and sex to calculate your RDA Vitamin B6 levels. Get instant results displayed in a table, presenting the appropriate Vitamin B6 level based on your age and sex.
</p>
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
      <Modal.Actions>
      <Button color='red' onClick={() => setModalOpen(false)}>
          <Icon name='remove' /> Close Modal
        </Button>
        {/* <Button color='green' onClick={() => setModalOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button> */}
      </Modal.Actions>

    </Modal>
  );
};

export default VitaminB6ModalForm;
