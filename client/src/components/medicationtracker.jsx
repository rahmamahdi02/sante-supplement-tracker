import React, { useState } from 'react';
import { Table, Input, Button, Checkbox } from 'semantic-ui-react';

const MedicationTable = () => {
  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState('');
  const [schedule, setSchedule] = useState([]);

  const handleMedicationChange = (e) => {
    setNewMedication(e.target.value);
  };

  const handleAddMedication = () => {
    if (newMedication.trim() !== '') {
      setMedications([...medications, newMedication]);
      setNewMedication('');
      const updatedSchedule = [...schedule, Array(7).fill(false)];
      setSchedule(updatedSchedule);
    }
  };

  const handleCheckboxChange = (index, dayIndex) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index][dayIndex] = !updatedSchedule[index][dayIndex];
    setSchedule(updatedSchedule);
  };

  const handleDeleteMedication = (index) => {
    const updatedMedications = [...medications];
    updatedMedications.splice(index, 1);
    setMedications(updatedMedications);

    const updatedSchedule = [...schedule];
    updatedSchedule.splice(index, 1);
    setSchedule(updatedSchedule);
  };

  const handleEditMedication = (index, newValue) => {
    const updatedMedications = [...medications];
    updatedMedications[index] = newValue;
    setMedications(updatedMedications);
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Medication</Table.HeaderCell>
            <Table.HeaderCell>Monday</Table.HeaderCell>
            <Table.HeaderCell>Tuesday</Table.HeaderCell>
            <Table.HeaderCell>Wednesday</Table.HeaderCell>
            <Table.HeaderCell>Thursday</Table.HeaderCell>
            <Table.HeaderCell>Friday</Table.HeaderCell>
            <Table.HeaderCell>Saturday</Table.HeaderCell>
            <Table.HeaderCell>Sunday</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {medications.map((medication, index) => (
            <Table.Row key={index}>
              <Table.Cell>
                <Input
                  value={medication}
                  onChange={(e) => handleEditMedication(index, e.target.value)}
                />
              </Table.Cell>
              {schedule[index].map((taken, dayIndex) => (
                <Table.Cell key={dayIndex}>
                  <Checkbox
                    checked={taken}
                    onChange={() => handleCheckboxChange(index, dayIndex)}
                  />
                </Table.Cell>
              ))}
              <Table.Cell>
                <Button
                  icon="trash"
                  color="red"
                  onClick={() => handleDeleteMedication(index)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell>
              <Input
                placeholder="Enter medication"
                value={newMedication}
                onChange={handleMedicationChange}
              />
            </Table.HeaderCell>
            <Table.HeaderCell colSpan="8">
              <Button
                icon="plus"
                color="green"
                onClick={handleAddMedication}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
 

  );
};

export default MedicationTable;
