import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ProjectCard } from './ProjectCard';
import Grid from '@material-ui/core/Grid';


export const Projects = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <ProjectCard
                title="DND"
            />
            <ProjectCard
                title="CAMP"
            />
            <ProjectCard
                title="STORE"
            />
        </React.Fragment>
    );
}
