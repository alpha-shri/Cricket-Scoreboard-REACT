import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Scorecard from './components/Scorecard';
import SportsCricketTwoToneIcon from '@material-ui/icons/SportsCricketTwoTone';
import { getMatches } from './service/ApiService';
import { Grid } from '@material-ui/core';


function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {

    getMatches()
      .then( data => {
          // console.log(data.matches);
          setMatches(data.matches);
      })
      .catch( err => console.warn("Error retrieving data: ", err));

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <SportsCricketTwoToneIcon />
        <h2>Live Cricket Scoreboard</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Grid container>
        <Grid sm={2}></Grid>
        <Grid sm={8}>
          {matches.map( (match) => (
            
            <Fragment>
              {
                (match.type === "Twenty20")?
                  <Scorecard key={match.unique_id} match={match} />
                  :("")
              }
            </Fragment>            
          ))}
        </Grid>
      </Grid>

      
    </div>
  );
}

export default App;
