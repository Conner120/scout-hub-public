import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  title:{
    color: 'white'
  }

}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const deleteCookie=(cookiename)=>{
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var expires = ";expires="+d;
    var name=cookiename;
    alert(name);
    var value="";
    document.cookie = name + "=" + value + expires + "; path=/acc/html";
  }
  const classes = useStyles();

  const [notifications] = useState([]);
  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <h1 className={classes.title}>Scout Chat</h1>
          {/*<img*/}
          {/*  alt="Logo"*/}
          {/*  src="/images/logos/logo--white.svg"*/}
          {/*/>*/}
        </RouterLink>
        <div className={classes.flexGrow} />
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            onClick={()=>{document.cookie = "jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";window.location="/"}}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
