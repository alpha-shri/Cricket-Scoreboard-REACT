import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import vs from './../vs.png'
import './../css/Score.css'
import { getMatchDetails } from '../service/ApiService'


const Scorecard = ( {match} ) => {

    console.log("Matches: ", match);
    
    const [details, setDetails] = useState({});
    const [open, setOpen] = useState(false);

    const fetchMatchDetails = (id) => {
        getMatchDetails(id)
            .then( data => {
                console.log("Match Data:- ", data);
            })
            .catch( err => console.log("Scorecard fetchMatchDetails method: ", err))
    }
    
    

    return (
        <Card className="main-card">
            <CardContent>
                <Typography variant="h5" color="primary" component="p">
                    <Grid container justify="center" alignItems="center" spacing={3}>
                        <Grid item>
                            <Typography variant="h5">
                                {match["team-1"]}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                <img src={vs} className="VS-Image" alt="" />
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">
                                {match["team-2"]}
                            </Typography>
                        </Grid>
                    </Grid>
                </Typography>
                <CardActions justify="center">
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Button variant="contained" color="primary" spacing={2}
                                onClick={ () => {
                                    fetchMatchDetails(match.unique_id)
                                }}>
                                Show Details
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Start Time: {new Date(match.dateTimeGMT).toLocaleString()}
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </CardContent>
        </Card>
    )

}

export default Scorecard;
