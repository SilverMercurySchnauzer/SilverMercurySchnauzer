import React from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, Icon } from '@material-ui/core'
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginName: '',
      loginPassword: ''
    }
  }

  setloginName(e) {
    this.setState({
      loginName: e.target.value
    })
  }

  setloginPassword(e) {
    this.setState({
      loginPassword: e.target.value
    })
  }

  handleLogin() {
    axios.post('api/login', {
      username: this.state.loginName,
      password: this.state.loginPassword
    })
      .then(response => {
        console.log('User verified! response from server-->', response.data);
        //localStorage.setItem('token', response.token);
        //this.props.setToken(response.token);
        //this.props.toggleLogin();
      })
      .catch(err => {
        console.log('unable to add user to DB');
      })
  }

  render() {
    return (
      <div className='login-container'>
        <div className='login-form-container' style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1>Login</h1>

          <form noValidate autoComplete='off' className='login-form'>
            <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
              <TextField
                fullWidth
                required
                id='username'
                label='Enter a username'
                placeholder='Username'
                margin='normal'
                value={this.state.loginName}
                onChange={this.setloginName.bind(this)}
              >
              </TextField>
            </div>
            <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }}>
              <TextField
                fullWidth
                required
                id='password'
                label='Enter a password'
                placeholder='password'
                margin='normal'
                value={this.state.loginPassword}
                onChange={this.setloginPassword.bind(this)}
              >
              </TextField>
            </div>
            <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
              <Button 
                variant="contained" 
                size="small" 
                className='login-btn' 
                color='primary' 
                onClick={this.handleLogin.bind(this)}
                >
                Login
            </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
  


export default Login;