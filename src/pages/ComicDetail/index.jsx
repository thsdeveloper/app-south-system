import React, { useEffect } from 'react';

import { useRouteMatch } from "react-router-dom";
import {useComic} from "../../hooks/Comic";
import Grid from "@material-ui/core/Grid";
import {Backdrop, CircularProgress, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

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

const ComicDetail = () => {
  const classes = useStyles();
  const { getComicDetail, comicDetail, isLoading } = useComic();

  let { params } = useRouteMatch("/detail/:comic");

  useEffect(() => {
    getComicDetail({ comicId: params.comic });
  }, [params.comic ]);

  if (isLoading) {
    return (
      <Backdrop open={true}>
        <CircularProgress color="inherit"/>
      </Backdrop>
    );
  }

  const image = `${comicDetail.thumbnail?.path}.${comicDetail.thumbnail?.extension}`;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
        <img src={image} width='100%' />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h2">
            {comicDetail.title}
          </Typography>
          <Typography variant="body2">
            {comicDetail.description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ComicDetail;
