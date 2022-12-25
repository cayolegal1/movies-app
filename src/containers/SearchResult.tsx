import {useLocation} from 'react-router-dom';
import {MoviesListLayout} from '../layouts';
import {renderMovies} from '../helpers/renderMovies';

export const SearchResult = () => {
  const {state: {data, search}} = useLocation();
  const searchedMovieTitle = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase()
  const movies = renderMovies(data);

  //TODO: Hacer una condicional del botón de back para ver si es que el resultado del search es muy largo. O hacer un componente
  return (
    <MoviesListLayout>

      <h1 className='font-bold text-purple-900 text-lg m-auto'> 
        {data.length === 0 
          ? (`No results for '${searchedMovieTitle}' movies`)
          : `Results for '${searchedMovieTitle}'`
        }
      </h1>

      {movies}
      
    </MoviesListLayout>
  
  )
}
