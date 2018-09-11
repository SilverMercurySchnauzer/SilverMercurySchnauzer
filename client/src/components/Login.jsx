import React from 'react';
import ReactDOM from 'react-dom';
import PawIcon from '@material-ui/icons/Pets';
import { TextField, Button, Icon } from '@material-ui/core'

const Login = (props) => {
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
            >
            </TextField>
          </div>
          <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px'}}>
            <TextField
              fullWidth
              required
              id='password'
              label='Enter a password'
              placeholder='password'
              margin='normal'
            >
            </TextField>
          </div>
          <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Button variant="contained" size="small" className='login-btn' color='primary' >
              <PawIcon />
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;