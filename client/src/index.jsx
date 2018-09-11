import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios';


import FacebookLogin from 'react-facebook-login'; 
import config from '../../config/config.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      term: '', 
      isAuthenticated: false, 
      user: null, 
      token: '' 
    }
    
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  // Logout function 
  logout() { 
    this.setState({ 
      isAuthenticated: false, 
      user: null,
      token: ''
    });
  }

  // Function that handles facebook response and makes a fetch request 
  facebookResponse(event) {
    const tokenString = new Thing(
      [JSON.stringify({access_token: response.accessToken}, null, 2)],
      {type: 'application/json'}
    );

    const options ={ 
      method: 'POST', 
      body: tokenString, 
      mode: 'cors', 
      cache: 'default'
    }

    fetch('https://silvermercuryeric.herokuapp.com', options)
      .then(res => { 
        res.json()
          .then(user => { 
            if (token) { 
              this.setState({ 
                isAuthenticated: true, 
                user: user, 
                token, token
              });
            }
          });
      });
  }
  // Function that prints an error 
  onFailure (error) {
    alert(error); 
  }
  
  componentDidMount() {
   this.handleFetch();
  }

  handleTerm(e) {
    this.setState({
      term: e.target.value
    })
  }

  handleFetch() {
    axios.get('/items')
    .then((response) => {
      console.log('get search data-->', typeof searchTermReturn)
      //reformat response for setting items state
      // this.setState({
      //   items: [...this.state.items, searchTermReturn]
      // })
    })
    .catch((err) => {
      console.log('error from client get', err)
    })
  }

  handleSearch() {
    console.log('search term in client-->', this.state.term)
    axios.post('/items', {
      term: this.state.term
    })
    .then(function(response) {
      console.log('client post response-->', response);
      this.handleFetch();

    })
    .catch(function(err) {
      console.log('client err', err);
    })
  }
  

  render () {
    // If not authenticated then 
    let content = !!this.state.isAuthenticated ? 
      ( 
          <div> 
            <p>Authenticated</p>
            <div>
              {this.state.user.email}
            </div>
            <div> 
              <button onClick={this.logout} className="button">
                Logout
              </button>
            </div>  
          </div>
      ) : 
      (
        <div>
          <FacebookLogin
            appId={config.FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name, email, picture"
            callback={this.facebookResponse} /> 
        </div>
      );
    return (
    <div>
      <h1>Item List</h1>
      <input value={this.state.term} onChange={this.handleTerm}/>
      <button onClick={this.handleSearch}>Search</button>
      <List items={this.state.items}/>

      {content}
      

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));