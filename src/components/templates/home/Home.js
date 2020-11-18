import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import LikeList from '../../modules/LikeList';

function Home() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        <img
                            src="https://dummyimage.com/1280x400/cccccc/fff.jpg&text=INTRO"
                            alt="INTRO"
                            style={{ width: '100%' }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>MOST Linked</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <Typography>MOST Liked</Typography>
                        <LikeList size={3} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
