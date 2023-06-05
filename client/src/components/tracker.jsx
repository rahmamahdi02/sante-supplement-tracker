import React, {useState } from 'react';
import { Table, Input } from 'semantic-ui-react';


function Tracker() {
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [dosagePerDay, setDosagePerDay] = useState(Array(7).fill(0));

  const handleMedicationChange = (event) => {
    setMedication(event.target.value);
  };

  const handleDosageChange = (event) => {
    setDosage(event.target.value);
  };

  const handleDosagePerDayChange = (dayIndex, event) => {
    const updatedDosagePerDay = [...dosagePerDay];
    updatedDosagePerDay[dayIndex] = event.target.value;
    setDosagePerDay(updatedDosagePerDay);
  };

  const renderTableRows = () => {
    return dosagePerDay.map((dosage, index) => (
      <Table.Row key={index}>
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell>
          <Input
            value={dosage}
            onChange={(event) => handleDosagePerDayChange(index, event)}
            type="number"
          />
        </Table.Cell>
      </Table.Row>
    ));
  };

  return (
    <div>
      <div>
        <label>Medication:</label>
        <Input value={medication} onChange={handleMedicationChange} />
      </div>
      <div>
        <label>Dosage:</label>
        <Input value={dosage} onChange={handleDosageChange} />
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Day</Table.HeaderCell>
            <Table.HeaderCell>Dosage</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{renderTableRows()}</Table.Body>
      </Table>
    </div>
  );
};



export default Tracker;
