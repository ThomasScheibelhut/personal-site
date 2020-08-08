import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

export const Home = () => {
    return (
        <div style={{
            backgroundImage: 'url(ocean.jpg)',
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
                direction="row"
                justify="center"
                alignItems="stretch"
            >
                <Grid item>
                    <h1 style={{
                        color: 'black',
                        position:'absolute',
                        margin: '0',
                        padding: '0',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        FontFamily: 'Cinzel, serif',
                        WhiteSpace: 'nowrap',
                    }}>
                        Welcome To My Site! Check out my Projects
                    </h1>
                </Grid>
            </Grid>
        </div>
    );
}
