﻿import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ReactPlayer from 'react-player'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {

    };
}

export const ProjectCard = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Card className={classes.root} onClick={handleOpen} style={{ padding: "2%", backgroundColor: "whitesmoke", color: "black" }}>
                <CardActionArea>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <CardMedia
                        className={classes.media}
                        image={props.image}
                        title={props.title}
                    />
                    <CardContent>
                        <Typography >
                            {props.description}
                        </Typography>
                        <List component="nav" aria-label="main mailbox folders">
                        {props.technologies && props.technologies.map((technologies) =>
                            <div>
                                <Divider style={{ backgroundColor: "darkgray" }} />
                                <ListItem style={{ fontSize: "150%" }}>{technologies.name}</ListItem >
                            </div>
                            )}
                        </List>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                </CardActions>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "whitesmoke",
                    color: "black"
                    }}
                    className={classes.paper}>
                    <h2 id="simple-modal-title">{props.title}</h2>
                    <div
                        style={{
                            position: "relative",
                            paddingTop: "56.25%",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%"
                            }}
                        >
                            <ReactPlayer
                                url={props.demoVideo}
                                playing={true}
                                controls={true}
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>
                    <br/>
                    <a href={props.github} target="_blank">{props.github}</a>
                </div>
            </Modal>
        </div>
    );
}
