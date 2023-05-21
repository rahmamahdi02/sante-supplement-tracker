import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FactsheetComponent = () => {
  const [factsheets, setFactsheets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.ods.od.nih.gov/dsld/v9/ingredient-groups/?method=factsheet&term=Folic%20Acid', {
          params: {
            method: 'factsheet',
            term: 'Folic Acid'
          }
        });
        setFactsheets(response.data.results);
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
