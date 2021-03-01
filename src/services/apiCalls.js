import axios from 'axios';

const marvelURL = 'https://gateway.marvel.com/v1/public/',
  apiKey = `apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`;

const getMarvelComics = async (options) => {
  const {
    offset,
    title,
    exactMatch,
    sortName,
    limit,
  } = Object.assign({
    offset: 0,
    title: '',
    exactMatch: false,
    sortName: '',
    limit: 100,
  }, options);

  let url = `${marvelURL}comics?${apiKey}&offset=${offset}&orderBy=${sortName}&limit=${limit}`;

  if (title) {
    if (exactMatch) {
      url += `&title=${title}`;
    } else {
      url += `&titleStartsWith=${title}`;
    }
  }

  const response = await axios.get(url).catch((err) => console.log(err));

  console.log('Reposta API: ', response);


  try {
    if (response.status === 200) {
      if (offset > response.data.data.total) {
        throw new Error('Page does not exist.');
      } else {
        const pages = Math.floor(response.data.data.total / limit);
        return {
          comics: response.data.data.results,
          maxPage: response.data.data.total % limit > 0 ? pages + 1 : pages,
        };
      }
    } else {
      throw new Error(`Erro na consulta do Marvel API. Status code ${response.status}.`);
    }
  } catch (e) {
    console.error(e);
    return {
      comics: [],
      maxPage: 0,
    };
  }

};

const getMarvelComicDetail = async (comicId) => {
  let url = `${marvelURL}comics/${comicId.comicId}?${apiKey}`;
  const response = await axios.get(url).catch((err) => console.log(err));
  console.info('getMarvelComicDetail', response);

  try {
    if (response.status === 200) {
      return {
        comic: response.data.data.results[0],
      };
    } else {
      throw new Error(`Erro na consulta do Marvel API. Status code ${response.status}.`);
    }
  } catch (e) {
    console.error(e);
    return {
      comic: {},
    };
  }
};

export {
  getMarvelComics, getMarvelComicDetail
};
