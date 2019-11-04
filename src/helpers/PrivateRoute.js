import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const user = JSON.parse(localStorage.getItem('user'));
      return user ? (
        <Component {...props} {...user} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      );
    }}
  ></Route>
);

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
};

export default PrivateRoute;
