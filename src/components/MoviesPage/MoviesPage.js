
   
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchSearchMovie} from '../../services/api';
import SearchForm  from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';


 export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [list, setList] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const getQueryFromSearch =  new URLSearchParams(location.search).get("searchQuery") ?? "";

  const handleFormSubmit = (nextQuery) => {
    setSearchQuery(nextQuery);
  };

  useEffect(() => {
    setSearchQuery(getQueryFromSearch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "")
    return;
    fetchSearchMovie(searchQuery)
    .then((res) => setList(res.results));
    history.push({ ...location, search: `query=${searchQuery}` });
  }, [searchQuery]);

  useEffect(() => {
   
  }, [list]);

  return (
    <div >
      <SearchForm onSubmit={handleFormSubmit} />
      {list && <MoviesList list={list} />}
  
    </div>
  );
}