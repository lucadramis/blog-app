import React, { Component } from 'react';
import '../css/contact.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import logo from '../images/logo.png'


export default class Example extends Component {
    render() {
      return (
     

        <Form id="form">
          <img id="logo" src={logo}></img>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" name="email" id="Email" placeholder="example@yourdomain.it" />
          </FormGroup>
          <FormGroup>
            <Label for="nome">Nome</Label>
            <Input type="nome" name="nome" id="nome" placeholder="nome " />
          </FormGroup>
          <FormGroup>
            <Label for="nome">Cognome</Label>
            <Input type="cognome" name="cognome" id="cognome" placeholder="cognome" />
          </FormGroup>
          
          
          
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>
          <FormGroup tag="fieldset">
            
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Check me out
            </Label>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      );
    }
  }