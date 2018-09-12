import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

// FB OAuth imports 
import FacebookLogin from 'react-facebook-login';
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

class OAuth extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      isAuthenticated: false, 
      user: null, 
      token: ''
    };
  }
  // Logout method 
  logout() { 
    this.setState({ 
      isAuthenticated: false, 
      user: null, 
      token: ''
    });
  }

  // Facebook API call from client 
  facebookResponse(response) { 
    console.log('THIS IS OUR FACEBOOK REQUEST RESPONSE:', response.accessToken);
    const tokenFromFB = new Blob(
      [JSON.stringify({access_token: response.accessToken}, null, 2)], 
      {type: 'application/json'}); 
    
    // Create an options object for fetch request 
    const options = { 
      method: 'POST', 
      body: tokenFromFB,
      mode: 'cors',
      cache: 'default'
    };

    // Fetch request to FB api 
    fetch('https://silvermercuryeric.herokuapp.com/', options)
      .then(res => { 
        console.log('THIS IS OUR RESPONSE IN FETCH REQUEST', res);
        // Obtain token from response 
        const token = res.headers.get('x-auth-token');
        res.json()
          .then(user => { 
            if (token) { 
              this.setState({
                isAuthenticated: true, 
                user: user, 
                token: token 
              });
            }
          });
      });

  }; 
  
  render() { 
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
        <FacebookLogin 
            variant='contained' 
            size='small'
            className='login-btn'
            color='primary'
            value='facebook-login'
            style={{ margin: '15px' }}
            appId= {config.FACEBOOK_APP_ID}
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