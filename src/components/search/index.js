import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {MdSearch} from 'react-icons/md';
import {useComic} from '../../hooks/Comic'
import {makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const Search = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const {searchComic, comics} = useComic();

  useEffect(() => {
    console.log('chegou ...', comics)
  }, [comics])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      console.log(title);
      await searchComic({title: title});
      console.log('Comics search:', comics);
    }
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className='form-control'>
          <TextField fullWidth id="outlined-basic" label="Pesquise o quadrinho" variant="filled" value={title}
                     onChange={(e) => setTitle(e.target.value)}/>
        </div>
      </form>
    </div>
  );
};
export default Search;
