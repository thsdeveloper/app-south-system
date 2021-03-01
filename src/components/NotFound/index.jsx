import React from 'react';
import DeedPool from '../../assets/deadpool-char.3bb49829.gif'
import {Container} from "./styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {useComic} from '../../hooks/Comic'


const NotFound = () => {
  const {searchComic} = useComic();

  async function pesquisar() {
    await searchComic({title: '2020'});
  }

  return (
     <Container>
       <Grid container spacing={0} className='moldGeral'>
         <Grid item xs={6}>
          <div className='moldInfo'>
            <h1>Desculpe :(</h1>
            <p><strong>Stan Lee</strong> não encontrou ou ainda não escreveu este quadrinho. Pesquise novamente!</p>
            <Button variant="contained" color="secondary" size={"large"} onClick={pesquisar}>
              Pesquisar novamente
            </Button>
          </div>
         </Grid>
         <Grid item xs={6}>
           <img src={DeedPool} className="image" alt="Nenhum quadrinho foi encontrado..."/>
         </Grid>
       </Grid>
     </Container>
  );
};

export default NotFound;
