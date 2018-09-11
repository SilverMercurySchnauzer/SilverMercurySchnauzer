import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core'

const Oauth = (props) => {
  return (
    <div className='oauth-container' style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
      <h1>Oauth</h1>
      <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'inline-block' }}>
        <Button variant="contained" size="small" className='login-btn' color='primary' value='twitter-login' style={{ margin: '15px' }}>
         Login with Twitter
        </Button>
        <Button variant="contained" size="small" className='login-btn' color='primary' value='facebook-login' style={{ margin: '15px' }}>
          Login with Facebook
        </Button>
      </div>
    </div>
  );
}

export default Oauth;