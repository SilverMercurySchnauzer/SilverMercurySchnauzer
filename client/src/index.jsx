import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import NavBar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Feed from './components/Feed.jsx';
import Oauth from './components/Oauth.jsx';
import CreatePost from './components/CreatePost.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [1, 2, 3, 4, 5],
      drawerOpen: false,
      signUpComplete: false,
      loginComplete: false,
      token: null,
      userId: null
    }
  }

  componentDidMount() {
   
   if (this.state.token !== null) {
     this.setState({
       signUpComplete: true,
       loginComplete: true
     })
   }
  }

  toggleSignUpComplete() {
    this.setState ({
      signUpComplete: !this.state.signUpComplete
    })
  }

  toggleLoginComplete() {
    this.setState ({
      loginComplete: !this.state.loginComplete
    })
  }

  setToken(newToken) {
    this.setState({
      token: newToken
    })
  }

  setUserId(id) {
    this.setState({
      userId: id
    })
  }

  destroyToken() {
    localStorage.removeItem('token');
    this.setState({
      token: null
    })
  }

  render () {
    console.log('is token set?-->', this.state.token)
    console.log('is user id set?-->', this.state.userId)
    const loginView = this.state.signUpComplete === true ? 
      <Login 
        setToken={this.setToken.bind(this)}
        setUserId={this.setUserId.bind(this)}
        toggleLogin={this.toggleLoginComplete.bind(this)}/> : 
      <Signup
        toggleSignUp={this.toggleSignUpComplete.bind(this)}/>;

    const feedView = this.state.token !== null ? <Feed items={this.state.items} /> : null;

    return (
      <div>
        {loginView}
        {feedView}
        <NavBar destroyToken={this.destroyToken.bind(this)} />
        
        {/* <Feed items={this.state.items} /> */}
        <CreatePost userId={this.state.userId}/>
       
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));