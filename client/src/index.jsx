import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Oauth from './components/Oauth.jsx';
import Feed from './components/Feed.jsx';
import CreatePost from './components/CreatePost.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [1, 2, 3, 4, 5],
      token: null,
      hasMounted: false,
      authenticated: false,
      loading: false
    }

    this.handleValidation = this.handleValidation.bind(this);
  }

  componentDidMount() {
    this.setState({
      hasMounted: true
    }, () => {
      this.handleValidation();
    });
  }

  handleValidation() {
    axios.get('/validateuser', { params: { token: localStorage.getItem('token') } } )
      .then(authStatus => {
        this.setState({ 
          loading: false,
          authenticated: authStatus.data
         });
      })
      .catch(err => {
        console.log('err: ', err);
        console.log('Unable to authenticate user on server: ', err);
      });
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/feed' component={Feed} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/oauth' component={Oauth} />
          <Route exact path='/createpost' component={CreatePost} />
          <Redirect to='/' />
        </Switch>

        {this.state.loading ? <LoadingScreen /> : 
          this.state.authenticated ? <Redirect to='/feed' /> : <Redirect to='/login' /> }
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>), document.getElementById('app'));
