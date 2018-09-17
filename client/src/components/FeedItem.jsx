import React from 'react';
import ReactDOM from 'react-dom';
import ExandIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WhatsHotIcon from '@material-ui/icons/WhatsHot';
import { Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Collapse, IconButton, Typography } from '@material-ui/core';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.tweet,
      expanded: false
    };
    console.log('tweet: ', this.state.item);
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    return (
      <div className='post-container'>
        <Card style={{ backgroundColor: '#3f51b5', marginRight: 'auto', marginLeft: 'auto', marginTop: '5px', marginBottom: '5px', width: '80%' }}>
          <CardHeader
            avatar={
              <Avatar src='https://copelandcommunications.files.wordpress.com/2010/09/free-fat-twitter-bird-icon.png?w=450'>
                P
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={`@${this.state.item.user.screen_name}`}
            subheader={this.state.item.created_at}
          />
          {/* <CardMedia
            style={{height: '100px', width: '100px', marginLeft: '30px'}}
            image="https://thumbs.dreamstime.com/z/retro-bicycle-nature-background-autumn-49743173.jpg"
          /> */}
          <CardContent>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton
              onClick={this.handleExpandClick}
            >
              <ExandIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                {this.state.item.text}
              </Typography>
              {/* <Typography paragraph>
               Post Content will go here. Item number: 
                {this.state.item}
              </Typography> */}

            </CardContent>
          </Collapse>
        </Card>
      </div>
    );  
  }
  
};

export default FeedItem;