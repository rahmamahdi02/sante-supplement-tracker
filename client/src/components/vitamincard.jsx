import React, { useEffect, useState } from 'react';

const Vitamincard = ({vitamin}) => {
  const [factsheets, setFactsheets] = useState([]);

  const fetchData = async () => {
    try {

      // swapped get request with a post with multiple data, first vitamin term
      const requestOptions = {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "vitamin": vitamin.replace( " ","%") }) // use replace method to replace space 
    };

    const response = await fetch('/api/factsheets',requestOptions);


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
      {factsheets.map((factsheet, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">
              <a href={factsheet.link}>{factsheet.link}</a>
            </h5>
            <p className="card-text">{factsheet.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vitamincard;
