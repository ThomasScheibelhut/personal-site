import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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
                <Typography variant="h6" className={classes.title}>
                    Tommy Scheibelhut
                </Typography>
                <Button color="inherit">HOME</Button>
                <Button color="inherit">ABOUT</Button>
                <Button color="inherit">PROJECTS</Button>
            </Toolbar>
        </AppBar>
    );
}
