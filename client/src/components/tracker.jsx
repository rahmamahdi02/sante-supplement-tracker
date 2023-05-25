import React, { useEffect, useState } from 'react';

function Tracker() {
  const [medicationData, setMedicationData] = useState([]);
  const [medicationName, setMedicationName] = useState('');
  const [dosage, setDosage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/medicationData'); // Replace with your actual API endpoint
      const data = await response.json();
      setMedicationData(data);
    } catch (error) {
      console.error('Error fetching medication data:', error);
    }
  };

  const handleMedicationSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/medicationData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          medication_name: medicationName,
          dosage: dosage,
        }),
      });

      if (response.ok) {
        // Medication added successfully, fetch updated data
        fetchData();
        setMedicationName('');
        setDosage('');
      } else {
        console.error('Error adding medication:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding medication:', error);
    }
  };

  return (
    <div>
      <h2>Medication Data</h2>
      <form onSubmit={handleMedicationSubmit}>
        <div>
          <label htmlFor="medicationName">Medication Name:</label>
          <input
            type="text"
            id="medicationName"
            value={medicationName}
            onChange={(e) => setMedicationName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dosage">Dosage:</label>
          <input
            type="text"
            id="dosage"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
          />
        </div>
        <button type="submit">Add Medication</button>
      </form>
      {medicationData.map((medication) => (
        <div key={medication.medication_id}>
          <h3>{medication.medication_name}</h3>
          <ul>
            <li>Monday: {medication.monday ? `Dosage: ${medication.dosage}` : 'Not taken'}</li>
            <li>Tuesday: {medication.tuesday ? `Dosage: ${medication.dosage}` : 'Not taken'}</li>
            <li>Wednesday: {medication.wednesday ? `Dosage: ${medication.dosage}` : 'Not taken'}</li>
            <li>Thursday: {medication.thursday ? `Dosage: ${medication.dosage}` : 'Not taken'}</li>
            <li>Friday: {medication.friday ? `Dosage: ${medication.dosage}` : 'Not taken'}</li>
            <li>Saturday: {medication.saturday ? `Dosage: ${medication.dosage}` : 'Not taken'}</li>
            <li>Sunday: {medication.sunday ? `Dosage: ${medication.dosage}` : 'Not taken'}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Tracker;
