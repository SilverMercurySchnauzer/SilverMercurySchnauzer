import React from 'react';
import ReactDOM from 'react-dom';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';
import { AppBar, Toolbar, Drawer, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    return (
      <div>
        <AppBar position='static' color='secondary'>
          <Toolbar>
            <Drawer open={this.state.drawerOpen} variant='temporary' color='primary' >
              <List >
                <ListItem button divider onClick={this.toggleDrawer}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button divider>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create New Post" />
                </ListItem>
                <ListItem button divider>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Account" />
                </ListItem>
                <ListItem button divider>
                  <ListItemIcon>
                    <RemoveIcon />
                  </ListItemIcon>
                  <ListItemText primary="Remove Account" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            </Drawer>
            <IconButton color='inherit' onClick={this.toggleDrawer} >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" >
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
        
      </div>
    );
  }
}

export default NavBar;