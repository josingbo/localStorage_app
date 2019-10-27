import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  rrd_link: {
    textDecoration: 'none'
  }
}));

export default (props) => {
  const classes = useStyles();
  const handleLogout = () => {
    localStorage.removeItem('user')
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Dashboard
          </Typography>
          <nav>
            <Button color="primary" variant="outlined" className={classes.link}>
              <Link to="/analytics" className={classes.rrd_link}>
                Analytics
              </Link>
            </Button>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link} onClick={handleLogout}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {`Welcome ${props.username}`}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Let's get you started.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </Typography>
      </Container>
      
    </React.Fragment>
  );
}