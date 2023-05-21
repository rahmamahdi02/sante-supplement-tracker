import React, { useState } from 'react';
import { Segment, Header, Label, Input } from 'semantic-ui-react';

const SideProfile = ({ userName, age, weight, bmr }) => {
  const [editedUserName, setEditedUserName] = useState(userName);
  const [editedAge, setEditedAge] = useState(age);
  const [editedWeight, setEditedWeight] = useState(weight);
  const [editedBMR, setEditedBMR] = useState(bmr);

  return (
    <Segment style={{ backgroundColor: 'lightgreen' }}>
      <Header as="h3">Side Profile</Header>
      <p>
        <strong>User Name:</strong>
        <Input
          value={editedUserName}
          onChange={(e) => setEditedUserName(e.target.value)}
        />
      </p>
      <p>
        <strong>Age:</strong>
        <Input
          value={editedAge}
          onChange={(e) => setEditedAge(e.target.value)}
        />
      </p>
      <p>
        <strong>Weight:</strong>
        <Input
          value={editedWeight}
          onChange={(e) => setEditedWeight(e.target.value)}
        />
      </p>
      <p>
        <strong>BMR:</strong>
        <Input
          value={editedBMR}
          onChange={(e) => setEditedBMR(e.target.value)}
        />
      </p>
    </Segment>
  );
};

export default SideProfile;
