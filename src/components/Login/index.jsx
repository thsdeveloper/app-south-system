import React from 'react';
import Button from '@material-ui/core/Button';
import {useAuth0} from '@auth0/auth0-react';
import Loading from "../loading";
import {Container} from "./styles";

const Login = () => {
  const {loginWithRedirect, isAuthenticated, isLoading, logout} = useAuth0();

  if(isLoading){
    return (<Loading title={'Buscando usuário Auth0'} />)
  }

  function profile() {

  }

  if (isAuthenticated) {
    return (
     <Container>
       <Button variant="contained" color="secondary" onClick={() => logout({returnTo: window.location.origin})}>
         Sair
       </Button>
       <Button variant="contained" color="primary" href="/profile">
         Meu Perfil
       </Button>
     </Container>
    )
  }
  return (
    <Button variant="contained" size="large" color="secondary" onClick={() => loginWithRedirect()}>
      Entrar
    </Button>
  )
};

export default Login;
