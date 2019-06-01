import React, { Component, Fragment } from 'react';
const fs = window.require('fs');
// const { remote } = require('electron');
// const { BrowserWindow } = remote;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleOpenWindow = this.handleOpenWindow.bind(this);
    }
    handleOpenWindow() {
        // const win = new BrowserWindow();
    }
    render() {
        return (
            <Fragment>
                <h1>Hello world</h1>
                {/* <span>Home DIR: {process.env['HOME']}</span> */}
                {/* <button onClick={() => this.handleOpenWindow()}>Press Me</button> */}
            </Fragment>
        );
    }
}
