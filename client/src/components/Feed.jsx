import React from 'react';
import ReactDOM from 'react-dom';
import FeedItem from './FeedItem.jsx';

const Feed = (props) => {
  return (
    <div className='social-media-posts-container'>
      <h1>Social Media Content</h1>
      { props.items.map( (item, i) => <FeedItem key={i} item={item} /> ) }
    </div>
  );
};

export default Feed;