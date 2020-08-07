import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(bridge.jpg)`,
        width: '100%',
        height: '50vh',
    },
    media: {
        height: 140,
    },
});

export const Home = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" className={classes.root} >
                    <h1>Hello</h1>
            </Container>
        </React.Fragment>
    );
}
