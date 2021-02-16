import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LikeList from '../../modules/LikeList';
import LinkList from '../../modules/LinkList';
import BoardList from '../../modules/BoardList';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        marginBottom: theme.spacing(5),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <img
                            src="https://dummyimage.com/1280x400/cccccc/fff.jpg&text=INTRO"
                            alt="INTRO"
                            style={{ width: '100%' }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" gutterBottom>
                        MOST Linked
                    </Typography>
                    <Paper className={classes.paper}>
                        <LinkList size={3} />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" gutterBottom>
                        MOST Liked
                    </Typography>
                    <Paper className={classes.paper}>
                        <LikeList size={3} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Board List
                    </Typography>
                    <Paper className={classes.paper}>
                        <BoardList size={5} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
