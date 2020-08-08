import React from 'react';
import './custom.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Projects } from './components/Projects';
import { About } from './components/About';
import { Home } from './components/Home';
import { MenuBar } from './components/MenuBar';

export const App = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <div style={{
            width: '100%',
            height: '100%',
        }} >
            <ThemeProvider theme={theme}>
                <MenuBar />

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </ThemeProvider>
        </div>
    );
}
