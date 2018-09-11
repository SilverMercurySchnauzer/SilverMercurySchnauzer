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
      token: null
    }
  }

  componentDidMount() {
   //do something here eventually
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

  render () {
    const loginView = this.state.signUpComplete === true ? 
      <Login 
        setToken={this.setToken.bind(this)}
        toggleLogin={this.toggleLoginComplete.bind(this)}/> : 
      <Signup
        toggleSignUp={this.toggleSignUpComplete.bind(this)}/>;

    const feedView = this.state.loginComplete === true ? <Feed items={this.state.items} /> : null;

    return (
      <div>
        {loginView}
        {feedView}
        {/* <NavBar /> */}
        
        {/* <Feed items={this.state.items} /> */}
        {/* <CreatePost /> */}
       
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));