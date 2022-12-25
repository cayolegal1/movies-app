import {useLayoutEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {MoviesListLayout} from '../layouts'
import {renderMovies} from '../helpers';

export const MoviesByCategory = () => {
  const {state: {data, category}} = useLocation();
  const movies = renderMovies(data);
  useLayoutEffect(() => {
    window.scrollTo({top: 0})
  }, [])

  return (
    <MoviesListLayout>
      <h1 className='font-bold text-purple-900 text-lg m-auto'>
        Results for <span className='capitalize'>{category}</span> movies
      </h1>
      {movies}
    </MoviesListLayout>

  )
}
