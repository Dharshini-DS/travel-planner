import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';

function Itinerary({ itineraries, setItineraries }) {
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItineraries([...itineraries, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <TextField
        label="Add new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={addItem} fullWidth>
        Add
      </Button>
      <List>
        {itineraries.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Itinerary;
