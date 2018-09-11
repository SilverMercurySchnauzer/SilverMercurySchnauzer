import React from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, Icon } from '@material-ui/core'


const Signup = (props) => {
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
            >
            </TextField>
          </div>
          <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Button variant="contained" size="small" className='signup-btn' color='primary' >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;