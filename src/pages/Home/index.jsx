import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Avatar} from "@material-ui/core";
import Logo from '../../assets/characters_art_mas_dsk_01.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundImage: `url('${Logo}')`}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
         <h1>Teste de Nivelamento</h1>
        </Grid>
      </Grid>
    </div>
  );
}
