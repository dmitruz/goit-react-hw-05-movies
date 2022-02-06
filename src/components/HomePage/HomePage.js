import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import MovieList from '../MoviesList/MoviesList';
import {Tittle} from './HomePage.styled'


export default function HomePage() {
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(res => {
      setMovieList(res.results);
    });
  }, []);

    return (
      <>
      <Tittle>Trending today</Tittle>
     {movieList && <MovieList list={movieList} />}
      </>  
    );
}