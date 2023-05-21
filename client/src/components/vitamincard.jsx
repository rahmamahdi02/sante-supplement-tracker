import React, { useEffect, useState } from 'react';

const FactsheetComponent = () => {
  const [factsheets, setFactsheets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.ods.od.nih.gov/dsld/v9/ingredient-groups/?method=factsheet&term=Folic%20Acid');
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
        const data = await response.json();
        if (data.results) {
          setFactsheets(data.results);
           console.log(data.results);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {factsheets.map(factsheets => (
        <div key={factsheet.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{factsheets.link}</h5>
            <p className="card-text">{factsheets.name}</p>
          </div>
        </div>
      ))}
      <p> Console.log</p>
    </div>
  );
};

export default FactsheetComponent;
