import React from 'react';
import ReactDOM from 'react-dom';
import FeedItem from './FeedItem.jsx';
import NavBar from './NavBar.jsx';
import { Redirect, withRouter } from "react-router-dom";
import axios from 'axios';
import LoadingScreen from './LoadingScreen.jsx';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3, 4, 5],
      authenticated: false,
      loading: true,
      hasMounted: false,
      authenticated: false
    }

    this.handleValidation = this.handleValidation.bind(this);
  }

  componentDidMount() {
    this.setState({
      hasMounted: true,
    }, () => {
      this.handleValidation();
    });
  }

  handleValidation() {
    if (localStorage.getItem('token')) {
      this.setState({
        authenticated: true,
        loading: false
      });
    } else {
      this.setState({
        authenticated: false,
        loading: false
      })
    }
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen /> 
    } else {
      if (!this.state.authenticated) {
        return <Redirect to='/login' />
      } else {
        return (
          <div>
            <NavBar />
            <div className='social-media-posts-container' style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
              <h1>Social Media Content</h1>
              {this.state.items.map((item, i) => <FeedItem key={i} item={item} />)}
            </div>
          </div>
        );
      }
    }
  }
}

export default withRouter(Feed);