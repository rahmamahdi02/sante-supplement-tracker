import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'semantic-ui-react';

const Vitamincard = ({ vitamin }) => {
  const [factsheets, setFactsheets] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedFactsheet, setSelectedFactsheet] = useState(null);

  const fetchData = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vitamin: vitamin.replace(' ', '%') }),
      };

      const response = await fetch('/api/factsheets', requestOptions);

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

  const openModalHandler = (factsheet) => {
    setSelectedFactsheet(factsheet);
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <div>
      {factsheets.map((factsheet, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">
              <a href={factsheet.link}>{factsheet.link}</a>
            </h5>
            <p className="card-text">{factsheet.name}</p>
            <Button onClick={() => openModalHandler(factsheet)}>Click to Open</Button>
          </div>
        </div>
      ))}

      <Modal open={openModal} onClose={closeModalHandler}>
        <Modal.Header>{selectedFactsheet?.name}</Modal.Header>
        <Modal.Content>
          <p>
            <a href={selectedFactsheet?.link}>{selectedFactsheet?.link}</a>
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={closeModalHandler}>Close</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Vitamincard;

