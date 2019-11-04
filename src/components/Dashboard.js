import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

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
    textDecoration: 'none',
    fontSize: '1.3rem',
    marginRight: '20px',
  },
}));

const Dashboard = ({ username }) => {
  const classes = useStyles();
  const handleLogout = () => {
    localStorage.removeItem('user');
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Dashboard
          </Typography>
          <nav>
            <Link to="/analytics" className={classes.rrd_link}>
              Analytics
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            onClick={handleLogout}
          >
            Log out
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {`Welcome ${username}`}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          The purrr-fect lorem ipsum generator for clients who love their cats
          and cat memes. It’ll have your cat-loving clients purring their
          appreciation for your mock-ups in no time.
        </Typography>
      </Container>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Dashboard;
