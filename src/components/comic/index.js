import React, {useEffect} from 'react';
import {
  Backdrop,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CircularProgress,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardMedia from '@material-ui/core/CardMedia';
import {useComic} from "../../hooks/Comic";
import Grid from "@material-ui/core/Grid";
import Search from "../search";
import NotFound from "../NotFound";
import {Link} from "react-router-dom";

const Comic = () => {
  const {comics, searchComic} = useComic();

  useEffect(() => {
    searchComic({title: '2020'})
  }, []);

  useEffect(() => {
  }, [comics]);

  const {isLoading} = useComic();

  if (isLoading) {
    return (
      <Backdrop open={true}>
        <CircularProgress color="inherit"/>
      </Backdrop>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Search/>
      </Grid>

      {comics.length == 0 && <NotFound></NotFound>}

      {comics.map((comic, i) => {
        const image = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
        const fullDescription = comic.description;

        return (
          <Grid item xs={3} key={i}>
            <Card answer={comic}>
              <CardActionArea>
                <CardMedia image={image} component={'img'}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {comic.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {fullDescription}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/detail/${comic.id}`}>
                  <Button size="small" color="primary">
                    Detalhes
                  </Button>
                </Link>

              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  )
};

export default Comic;
