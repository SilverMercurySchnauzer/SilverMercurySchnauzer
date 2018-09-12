import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { TextField, Button, Icon } from '@material-ui/core';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  setUser(e) {
    this.setState({
      username: e.target.value
    })
  }

  setPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleSignUp() {
    axios.post('api/signup', {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      console.log(response.data.message);
      this.props.toggleSignUp();
    })
    .catch(err => {
      console.log('unable to add user to DB');
    })
  }

  render() {
    return (
      <div className='signup-container'>
        <div className='signup-form-container' style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1>Sign up</h1>

          <form noValidate autoComplete='off' className='signup-form'>
            <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
              <TextField
                fullWidth
                required
                id='username'
                label='Enter a username'
                placeholder='Username'
                margin='normal'
                value={this.state.username}
                onChange={this.setUser.bind(this)}
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
                value={this.state.password}
                onChange={this.setPassword.bind(this)}
              >
              </TextField>
            </div>
            <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
              <Button 
                variant="contained" 
                size="small" 
                className='signup-btn' 
                color='primary' 
                onClick={this.handleSignUp.bind(this)}
                >
                Sign up
            </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
}


export default Signup;