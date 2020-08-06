import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export class MenuBar extends Component {

    render() {
        return (
            <div>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button>About</Button>
                    <Button>Projects</Button>
                    <Button>Contact</Button>
                </ButtonGroup>
            </div>
        );
    }
}
