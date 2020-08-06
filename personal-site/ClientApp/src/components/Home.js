import React, { Component } from 'react';

export class Home extends Component {

  render () {
    return (
      <div>
            <h1>Tommy Scheibelhut</h1>
            <i
                style={{
                    borderRadius: "50%",
                    width: 500,
                    height: 500,
                    display: "block",
                    background: `url(me.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "auto 80px"
                }}
            />
      </div>
    );
  }
}
