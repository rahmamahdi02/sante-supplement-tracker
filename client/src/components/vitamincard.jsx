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
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {factsheets.map(factsheet => (
        <div key={factsheet.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{factsheet.title}</h5>
            <p className="card-text">{factsheet.url}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FactsheetComponent;
