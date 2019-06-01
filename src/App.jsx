import React, { Component, Fragment } from 'react';
import { Jumbotron, Accordion, Card, ButtonGroup, Button } from 'react-bootstrap';
const fs = window.require('fs');
const { remote } = require('electron');
const { generateKeyPair } = require('crypto');
const { BrowserWindow } = remote;
// import 'bootstrap';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicKey: '',
            privateKey: ''
        }
        this.handleOpenWindow = this.handleOpenWindow.bind(this);
    }
    handleOpenWindow() {
        const win = new BrowserWindow();
    }
    handleGenerateKeyPair(passphrase) {
        generateKeyPair('rsa', {
            modulusLength: 4096,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
                cipher: 'aes-256-cbc',
                passphrase
            }
        }, (err, publicKey, privateKey) => {
            this.setState({ publicKey, privateKey });
        });
    }

    render() {
        const { publicKey, privateKey } = this.state;
        return (
            <Fragment>
                <Jumbotron fluid>
                    <h1>Hello world</h1>
                    <hr/>
                    <span>Home directory: {process.env['HOME']}</span>
                    <ButtonGroup>
                        <Button variant="primary" onClick={() => this.handleOpenWindow()}>New Window</Button>
                        <Button variant="primary" onClick={() => this.handleGenerateKeyPair('top secret')}>Generate Key Pair</Button>
                    </ButtonGroup>
                </Jumbotron>
                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Public Key
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>{publicKey}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Private Key
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>{privateKey}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Fragment>
        );
    }
}
