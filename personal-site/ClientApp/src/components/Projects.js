import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ProjectCard } from './ProjectCard';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';


export const Projects = () => {
    const [isMobile, setMobile] = React.useState(false);

    React.useEffect(() => {
        const userAgent =
            typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const mobile = Boolean(
            userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
            )
        );
        setMobile(mobile);
    }, []);

    return (
        <div>{!isMobile && <div style={{
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
                style={{ height: "100%" }}
                flex="1"
            >
                <Paper style={{ height: "100%", width: "60%" }}>
                    <h1 style={{ padding: "2%" }}>Projects</h1>
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                    >
                        <Grid item>
                            <ProjectCard
                                style={{ paddingBottom: "2%" }}
                                title="Bandmate"
                                image="bandmate.png"
                                demoVideo="https://www.youtube.com/watch?v=Ouu5LKAmkGE"
                                description="Bandmate is website designed to get local musicians, bands, and venues togther."
                                technologies={[{ "name": "React" }, { "name": "C#" }, { "name": "Microsoft SQL Server" }, { "name": ".Net Core" }]}
                                github={"https://github.com/ThomasScheibelhut/Bandmate"}
                            />
                        </Grid>
                        <Grid item>
                            <ProjectCard
                                title="Dungeons and Dragons Assistant"
                                image="dnd.png"
                                demoVideo="https://www.youtube.com/watch?v=gx0CfZxN6mM"
                                description="This application helps to streamline playing Dungeons and Dragons"
                                technologies={[{ "name": "React" }, { "name": "API" }, { "name": "CSS" }, { "name": "HTML" }]}
                                github={"https://github.com/ThomasScheibelhut/Dungeons-and-Dragons-Assistant"}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            </div>}
            {isMobile && <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
                style={{ height: "100%", backgroundImage: "linear-gradient(#43aa72, #4395c6, #435d94)" }}
                flex="1"
            >
                <Paper style={{ height: "100%", paddingLeft: "2%", paddingRight: "2%" }}>
                    <h1 style={{ padding: "2%" }}>Projects</h1>
                    <Grid
                        container
                        direction="column"
                        justify="space-around"
                    >
                        <Grid item style={{ paddingBottom: "2%" }}>
                            <ProjectCard
                                style={{ paddingBottom: "5%" }}
                                title="Bandmate"
                                image="bandmate.png"
                                demoVideo="https://www.youtube.com/watch?v=Ouu5LKAmkGE"
                                description="Bandmate is website designed to get local musicians, bands, and venues togther."
                                technologies={[{ "name": "React" }, { "name": "C#" }, { "name": "Microsoft SQL Server" }, { "name": ".Net Core" }]}
                                github={"https://github.com/ThomasScheibelhut/Bandmate"}
                            />
                        </Grid>
                        <Grid item style={{ paddingBottom: "2%" }}>
                            <ProjectCard
                                title="Dungeons and Dragons Assistant"
                                image="dnd.png"
                                demoVideo="https://www.youtube.com/watch?v=gx0CfZxN6mM"
                                description="This application helps to streamline playing Dungeons and Dragons"
                                technologies={[{ "name": "React" }, { "name": "API" }, { "name": "CSS" }, { "name": "HTML" }]}
                                github={"https://github.com/ThomasScheibelhut/Dungeons-and-Dragons-Assistant"}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>}
        </div>
    );
}
