import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';

function Accommodation({ accommodations, setAccommodations }) {
  const [newAccommodation, setNewAccommodation] = useState('');

  const addAccommodation = () => {
    if (newAccommodation.trim() !== '') {
      setAccommodations([...accommodations, newAccommodation]);
      setNewAccommodation('');
    }
  };

  return (
    <div>
      <TextField
        label="Add new accommodation"
        value={newAccommodation}
        onChange={(e) => setNewAccommodation(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={addAccommodation} fullWidth>
        Add
      </Button>
      <List>
        {accommodations.map((acc, index) => (
          <ListItem key={index}>
            <ListItemText primary={acc} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Accommodation;
