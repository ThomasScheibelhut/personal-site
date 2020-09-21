import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Paper } from '@material-ui/core';

export const Home = () => {
    return (
        <div style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            position: 'fixed',
            width: '100%',
            height: '100%',
        }} >
            <CssBaseline />
            <Paper style={{
                color: 'black',
                position:'absolute',
                top: '20%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                WhiteSpace: 'nowrap',
                backgroundColor: "whitesmoke",
                padding:"1%"
            }}
            elevation={13} 
            >
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <h1>
                            WELCOME!
                        </h1>
                    </Grid>
                    <Grid item>
                        <Link to={"/projects"}>
                            Check out my projects HERE
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
