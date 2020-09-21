import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { IconButton } from '@material-ui/core';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
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
                        <Link to="/" style={{ textDecoration: "none", color:"white" }}>
                            <Typography variant="h6">
                                    Tommy Scheibelhut
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            spacing={3}
                        >
                            <div className={classes.root}>
                                <ButtonGroup size="large" variant="text" color="primary" aria-label="text primary button group">
                                    <Link to="/">
                                        <Button>
                                            Home
                                        </Button>
                                    </Link>
                                    <Link to="/about">
                                        <Button>
                                            About
                                        </Button>
                                    </Link>
                                    <Link to="/projects">
                                        <Button>
                                            projects
                                        </Button>
                                    </Link>
                                </ButtonGroup>
                            </div>
                            <IconButton>
                                <EmojiObjectsIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
