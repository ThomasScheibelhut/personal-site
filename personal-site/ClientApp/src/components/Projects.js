import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ProjectCard } from './ProjectCard';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';


export const Projects = () => {
    return (
        <div style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            position: 'fixed',
            width: '100%',
            height: '100%',
        }} >
            <CssBaseline />
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
                style={{ height: "100%"}}
            >
                <Paper style={{ height: "100%", width: "60%"}}>
                    <h1 style={{ padding: "2%" }}>Projects</h1>
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                    >
                        <Grid item>
                            <ProjectCard
                                title="Bandmate"
                                description="Bandmate is website designed to get local musicians, bands, and venues togther."
                                technologies={[{ "name": "React" }, { "name": "C#" }, { "name": "Microsoft SQL Server" }, { "name": "API" }]}
                            />
                        </Grid>
                        <Grid item>
                            <ProjectCard
                                title="DnD Assistant"
                                description="This application helps to streamline playing Dungeons and Dragons"
                                technologies={[{ "name": "React" }, { "name": "CSS" }, { "name": "HTML" }, { "name": "API" }]}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}
