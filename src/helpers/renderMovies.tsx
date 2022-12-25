import {useNavigate} from "react-router-dom";
import {Movie} from '../models';

export const renderMovies = (movies: Movie[]): JSX.Element[] => {
  const navigate = useNavigate();
  return movies.map((movie) => {
    const title = movie.title.replace(/[,?]/g, '');
    return (
      <div key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
          onClick={() => navigate(`/${title}/detail`, {state: movie})}
          className='h-64 w-60 rounded cursor-pointer md:h-1/4 md:w-auto'
          alt={movie.title} 
          title={movie.title} 
        />
      </div>
    )}
  )
}

