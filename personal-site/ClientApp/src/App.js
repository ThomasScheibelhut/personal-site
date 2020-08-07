import React from 'react';
import Grid from '@material-ui/core/Grid';
import './custom.css'
import { makeStyles } from '@material-ui/core/styles';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Home } from './components/Home';
import { MenuBar } from './components/MenuBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export const App = () => {
    const classes = useStyles();

    return (
        <div>
            <MenuBar />
        
            <Home />
        </div>
    );
}
