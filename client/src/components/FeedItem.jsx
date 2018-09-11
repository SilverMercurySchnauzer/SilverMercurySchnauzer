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
      item: this.props.item,
      expanded: false
    };

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
              <Avatar>
                P
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Social Media Post"
            subheader="A date will be here"
          />
          <CardMedia
            style={{height: '100px', width: '100px', overflow: 'auto'}}
            image="http://www.clker.com/cliparts/l/V/H/N/w/o/twitter-fat-bird-hi.png"
          />
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
                blah blah blah
              </Typography>
              <Typography paragraph>
               Post Content will go here. Item number: 
                {this.state.item}
              </Typography>

            </CardContent>
          </Collapse>
        </Card>
      </div>
    );  
  }
  
};

export default FeedItem;