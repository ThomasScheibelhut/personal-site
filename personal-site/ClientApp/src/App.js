import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './custom.css'
import { Projects } from './components/Projects';
import { About } from './components/About';
import { MenuBar } from './components/MenuBar';
import { Home } from './components/Home';

export default class App extends Component {
  static displayName = App.name;

  render () {
      return ( 
        <Grid container direction="column" justify="flex-start" alignItems="center">
            <Grid item>
                <Home />
            </Grid>
            <Grid item>
                <About />
            </Grid>
            <Grid item>
                <Projects />
            </Grid>
        </Grid>
    );
  }
}
