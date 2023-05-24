import React, { useEffect, useState } from 'react';

const Vitamincard = () => {
  const [factsheets, setFactsheets] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/factsheets');
      if (!response.ok) {
        throw new Error('Request failed with status: ' + response.status);
      }
      const data = await response.json();
      if (data) {
        setFactsheets(data);
         console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      < p> testing card </p>
      {factsheets.map((factsheet, index) => (
        <div key= {index} className="card">
          <div className="card-body">
            <h5 className="card-title">{factsheet.link}</h5>
            <p className="card-text">{factsheet.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vitamincard;
