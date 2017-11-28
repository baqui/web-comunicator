import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';

import {muiTheme} from '../../layouts/BasicTheme';

class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme} className='mui-custom'>
        <section className={this.props.className} >
          <form id='login-form' onSubmit={ this.handleSubmit } >
            <TextField
              name='email'
              floatingLabelText='Email'
              type='email'
              style={{width: '100%'}}
              onChange={ this.handleChange }
            />
            <br />
            <TextField
              name='password'
              floatingLabelText='Password'
              type='password'
              style={{width: '100%'}}
              onChange={ this.handleChange }
            />
            <br />
            <RaisedButton label='Login' primary type='submit' style={{width: '100%', marginTop: '20px'}} />
          </form>
        </section>
      </MuiThemeProvider>
    )
  }

  handleChange(event){
    const [ name, value ] = [event.target.name, event.target.value ];
    this.setState({ [name]: value })
  }

  handleSubmit(event){
    event.preventDefault();
    window.location = '/communicator';
  }
}

export default styled(LoginForm)`
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
  background-color: white;
  > form {
    width: 300px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
