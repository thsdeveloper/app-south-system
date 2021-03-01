import React, {createContext, useCallback, useContext, useState} from 'react';
import {getMarvelComicDetail, getMarvelComics} from '../services/apiCalls';

const ComicContext = createContext();

export const ComicProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comics, setComics] = useState([]);
  const [comicDetail, setComicDetail] = useState([]);

  const searchComic = useCallback(async ({ title }) => {

    setIsLoading(true);

    const {comics: result} = await getMarvelComics({title});
    console.info('Hooks', result);

    setComics(result);

    setIsLoading(false);

  }, [comics]);

  const getComicDetail = useCallback(async ({ comicId }) => {
    setIsLoading(true);
    const {comic: result} = await getMarvelComicDetail({comicId});
    setComicDetail(result);
    setIsLoading(false);
  }, [comicDetail]);

  return (
    <ComicContext.Provider value={{searchComic, comics, isLoading, getComicDetail, comicDetail}}>
      {children}
    </ComicContext.Provider>
  );
};

export const useComic = () => {
  const context = useContext(ComicContext);
  if (!context) {
    throw new Error('useComic deve ser utilizado dentro de um ComicProvider');
  }
  return context;
};
