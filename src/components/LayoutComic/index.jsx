import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from "react-router-dom";
import ImageMarvel from '../../assets/logo.svg'
import Routes from "../../routes";
import {Container} from "./styles";
import Login from "../Login";
import {positions} from '@material-ui/system';
import Grid from "@material-ui/core/Grid";
import {Avatar} from "@material-ui/core";
import {useAuth0} from "@auth0/auth0-react";


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#202020"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function LayoutComic() {
  const {user, isAuthenticated, isLoading} = useAuth0();
  const classes = useStyles();

  return (
    <Container>
      <AppBar position="fixed">
        <Toolbar className={classes.appBar}>
          <Grid alignItems={"center"} container spacing={2}>
            <Grid item xs={6}>
              <div className="moldHjs imgMold">
                <Link to="/">
                  <img src={ImageMarvel} width={100}/>
                </Link>
              </div>
              {isAuthenticated && (
                <div>
                  <div className="moldHjs moldavatar">
                    <Typography variant="h6">
                      <Avatar alt="Cindy Baker" src={user.picture}/>
                    </Typography>
                  </div>

                  <div className="moldHjs">
                    <Typography variant="h6">
                      <div className="moldTextTitle">Olá, {user.name}</div>
                    </Typography>
                  </div>
                </div>
              )}
              <div className="moldHjs">
                <Typography variant="h6">
                  <div className="moldTextTitle">Desafio Técnico - South System</div>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="moldLogin">
                <Login/>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <main className={clsx(classes.content, {[classes.contentShift]: true})}>
        <div className={classes.drawerHeader}/>
          <Routes />
        <div/>
      </main>
    </Container>
  );
}
