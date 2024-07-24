import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';

function PlanManager({ plans, setPlans }) {
  const [newPlan, setNewPlan] = useState('');

  const addPlan = () => {
    if (newPlan.trim() !== '') {
      setPlans([...plans, newPlan]);
      setNewPlan('');
    }
  };

  return (
    <div>
      <TextField
        label="Add new plan"
        value={newPlan}
        onChange={(e) => setNewPlan(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={addPlan} fullWidth>
        Add
      </Button>
      <List>
        {plans.map((plan, index) => (
          <ListItem key={index}>
            <ListItemText primary={plan} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default PlanManager;
