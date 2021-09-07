import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchData from '../helpers/request';
import { urls } from '../helpers/constant';
import MovieCard from '../component/MovieCard';
import { GET_MOVIES } from '../actions/type';

const Homepage = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(async () => {
    const fetchGenres = async () => {
      const { data: genres } = await fetchData.get(urls.genresUrl);
      return genres.genres;
    };
    const fetchMovies = async () => {
      const { data: results } = await fetchData.get(urls.moviePopular);

      dispatch({ type: GET_MOVIES, payload: results.results });
    };
    const res = await fetchGenres();
    await fetchMovies();
    console.log(res);
  }, []);
  return (
    <div className="d-flex flex-wrap">
      {movies?.map((movie) => <MovieCard imgUrl={movie.poster_path} key={movie.poster_path} />)}
    </div>
  );
};

export default Homepage;
