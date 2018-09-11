import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios';
import NavBar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Feed from './components//Feed.jsx';
import Oauth from './components/Oauth.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [1, 2, 3, 4, 5],
      term: '',
      drawerOpen: false
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
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
    axios.get('/api/items')
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
    let context = this;
    console.log('search term in client-->', this.state.term)
    axios.post('/api/items', {
      term: this.state.term
    })
    .then(function(response) {
      console.log('client post response-->', response);
      context.handleFetch();
    })
    .catch(function(err) {
      console.log('client err', err);
    })
  }

  render () {
    return (
      <div>
        <NavBar />
        <Oauth />
        <Signup />
        <Login />
        <Feed items={this.state.items} />
        {/* <input value={this.state.term} onChange={this.handleTerm}/>
        <button onClick={this.handleSearch}>Search</button>
        <List items={this.state.items}/> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));