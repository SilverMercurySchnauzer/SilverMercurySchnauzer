import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

// FB OAuth imports 
import FacebookLogin from 'react-facebook-login'; // npm react-faebook-login package
import config from '../../../config/config.json';


// const OAuth = (props) => {
//   return (
//     <div className='oauth-container' style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
//       <h1>Oauth</h1>
//       <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'inline-block' }}>
//         <Button variant="contained" size="small" className='login-btn' color='primary' value='twitter-login' style={{ margin: '15px' }}>
//          Login with Twitter
//         </Button>
//         <Button variant="contained" size="small" className='login-btn' color='primary' value='facebook-login' style={{ margin: '15px' }}>
//           Login with Facebook
//         </Button>
//       </div>
//     </div>
//   );
// }

// Setting Up Facebook Developer Platform

// Select the Facebook Login option for app setup 
// Copy and paste deployed heroku url into the APP domain field in settings 
// Under facebook login setting ensure you copy and paste a url in this specific format: 
// https://{your_domain}/api/auth/facebook/callback
// Copy and paste the APP id into the config file 
//  'facebookAuth': { 
//   'clientID': 'APP_ID', 
//   'clientSecret': 'secret found in fb developer portal either under settings basic or advanced', 
//   'callbackURL': 'https://silvermercuryeric.herokuapp.com/api/auth/facebook/callback', 
//   'profileURL': 'https://graph.facebook.com/v3.1/me?fields=first_name,last_name,email'
// }

class OAuth extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      isAuthenticated: false, 
      user: null, 
      token: ''
    };
  }
  // Logout method that resets the authentication state to false  
  logout() { 
    this.setState({ 
      isAuthenticated: false, 
      user: null, 
      token: ''
    });
  }

  // Facebook API call from client 
  facebookResponse(response) { 
    console.log('THIS IS OUR RESPONSE SENT TO FB:', response);
    
    // Initialize and create a token object to store info from fb 
    const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
    // Set up options for fetch request 
    const options = {
        method: 'POST',
        body: tokenBlob,
        mode: 'cors',
        cache: 'default'
    };

    // Fetch request to Facebook to obtain token from response 
    fetch("https://silvermercuryeric.herokuapp.com/auth/facebook/callback", options)
      .then((response) => {
        console.log('This is res', res.headers.get("x-auth-token"));
        const token = response.headers.get("x-auth-token");
        console.log('THIS IS OUR TOKEN', token);

        // if (token) { 
        //   this.setState({isAuthenticated: true, user, token})
        // }
        
        return response.json();        
        // res.json()
        // .then(user => {
        //     if (token) {
        //       this.setState({isAuthenticated: true, user, token})
        //     }
        // });
    });


  }; 
  
  render() { 
    // Check if user is authenticated 
    let content = !!this.state.isAuthenticated ?
      ( 
        <div> 
          <p>Authenticated</p>
          <div>
            {this.state.user.email}
          </div>
        </div>

      ) :
      ( 
        // Using facebook npm package to make requests to FB 
        <FacebookLogin 
            variant='contained' 
            size='small'
            className='login-btn'
            color='primary'
            value='facebook-login'
            style={{ margin: '15px' }}
            appId= 'config.FACEBOOK_APP_ID'
            autoLoad={false}
            fields='name, email, picture'
            callback={this.facebookResponse} 
        /> 
      );


    return (
      <div className='oauth-container' style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1>Oauth</h1>
        <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'inline-block' }}>
          <Button variant="contained" size="small" className='login-btn' color='primary' value='twitter-login' style={{ margin: '15px' }}>
          Login with Twitter
          </Button>
          {/* <Button variant="contained" size="small" className='login-btn' color='primary' value='facebook-login' style={{ margin: '15px' }}>
            Login with Facebook
          </Button> */}
        {content}
        </div>
      </div>
    );
  }
    
  

}

export default OAuth;