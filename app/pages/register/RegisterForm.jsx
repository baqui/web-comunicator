import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { register } from '../../actions/login-actions';
import styled from 'styled-components';
import {muiTheme} from '../../layouts/BasicTheme';

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch( register(data) )
})

@connect(mapStateToProps, mapDispatchToProps)
class RegisterForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      repeat_password: ''
    }
  }

  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme} className='mui-custom'>
        <div className={this.props.className} >
          <form id='register-form' onSubmit={ this.handleSubmit } >
            <TextField
              name='login'
              floatingLabelText='Email'
              type='text'
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
            <TextField
              name='repeat_password'
              floatingLabelText='Repeat password'
              type='password'
              style={{width: '100%'}}
              onChange={ this.handleChange }
            />
            <br />
            <RaisedButton label='Register' primary type='submit' style={{width: '100%', marginTop: '20px'}} />
          </form>
        </div>
      </MuiThemeProvider>
    )
  }

  isPwdConfirmationValid = (pwd, conf) => pwd === conf

  handleChange = (event) => {
    const [ name, value ] = [event.target.name, event.target.value ];
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO add registration here
    if( this.isPwdConfirmationValid() ){
      console.log("password valid");
    }
    const [jid, password] = [this.state.email, this.state.password]
    this.props.register({ jid, password });
  }
}

export default styled(RegisterForm)`
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
