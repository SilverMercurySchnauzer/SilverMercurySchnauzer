import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField'

const Signup = (props) => {
  return (
    <div className='signup-container'>
      <h1>Signup</h1>
      <form noValidate autoComplete='off' className='signup-form'>
        <div>
          <TextField
            required
            id='username'
            label='Enter a username'
            placeholder='Username'
            margin='normal'
          >
          </TextField>
        </div>
        <div>
          <TextField
            required
            id='password'
            label='Enter a password'
            placeholder='password'
            margin='normal'
          >
          </TextField>
        </div>
      </form>
    </div>
  );
}

export default Signup;