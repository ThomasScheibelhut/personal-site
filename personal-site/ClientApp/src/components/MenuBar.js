import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({ 
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export const MenuBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid
                    container 
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography variant="h6">
                                Tommy Scheibelhut
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            spacing={3}
                        >
                            <Grid item>
                                <Link to="/">Home</Link>
                            </Grid>
                                <Grid item>
                            <Link to="/about">About</Link>
                            </Grid>
                            <Grid item>
                                <Link to="/projects">Projects</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
