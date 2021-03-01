import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import logoMarvel from "../../assets/logo.svg"
import logo from "../../assets/download.png"
import {Container} from "./styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Login from "../../components/Login";

const Authentication = () => {
  const {loginWithRedirect} = useAuth0();
  return (
    <Container>
      <Grid container
            direction="row"
            justify="center"
            alignItems="center">
        <div className="moldLoginInicial">
          <img src={logo}/>
          <Typography variant='h2' color="textPrimary">
            Olá, seja bem vindo ao universo <strong>Marvel</strong> dos Quadrinhos.
          </Typography>
          <Typography variant="h6">
            Todas as aventuras dos maiores Heróis da terra estão aqui! Pode entrar e conferir.
          </Typography>
          <div>
            <Login/>
          </div>

          <Typography className="moldDataBy">
            <small>Data provided by Marvel. © 2017 MARVEL</small>
          </Typography>
        </div>
      </Grid>

    </Container>
  );
};

export default Authentication;
