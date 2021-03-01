import React from 'react';
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom';

// import { useAuth } from '../hooks/Auth';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "../components/loading";

const PrivateRoute = ({ children, ...rest }) => {
  const {isAuthenticated, isLoading} = useAuth0();

  if (isLoading) {
    return (<Loading title={'Buscando usuário Auth0...'} />);
  }

  return (
    <ReactDOMRoute
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
