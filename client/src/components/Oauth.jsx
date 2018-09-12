import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import FacebookLogin from 'react-facebook-login';


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
  facebookResponse(event) { 

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
            appId='' 
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