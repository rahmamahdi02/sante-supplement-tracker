import React, { useEffect, useState } from 'react';

function tracker() {
  const [medicationData, setMedicationData] = useState([]);

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

  
  return (
    <div>
      <h2>Medication Data</h2>
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

export default tracker;
