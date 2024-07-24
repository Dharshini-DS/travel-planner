import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, CssBaseline } from '@mui/material';
import Itinerary from './components/Itinerary';
import Accommodation from './components/Accommodation';
import PlanManager from './components/PlanManager';
import './App.css';

function App() {
  const [itineraries, setItineraries] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [plans, setPlans] = useState([]);

  return (
    <Container>
      <CssBaseline />
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Travel Planner
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card className="card-section">
            <CardContent>
              <Typography variant="h5" component="h2">
                Itinerary
              </Typography>
              <Itinerary itineraries={itineraries} setItineraries={setItineraries} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-section">
            <CardContent>
              <Typography variant="h5" component="h2">
                Accommodation
              </Typography>
              <Accommodation accommodations={accommodations} setAccommodations={setAccommodations} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-section">
            <CardContent>
              <Typography variant="h5" component="h2">
                Plan Manager 
              </Typography>
              <PlanManager plans={plans} setPlans={setPlans} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
