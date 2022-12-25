import {Movie} from '../models';
import {useNavigate} from 'react-router-dom'

type Props = {

    relatedMovie: Movie, 
    setRelatedMovies: any,
}

export const DetailRelatedMovie = ({relatedMovie, setRelatedMovies}: Props) => {
  const navigate = useNavigate();
  return (
    <div key={relatedMovie.id}>
        <img 
            src={`https://image.tmdb.org/t/p/w500/${relatedMovie.poster_path}`} 
            className="w-36 h-30 rounded-lg img cursor-pointer"
            title={relatedMovie.title}
            onClick={() => [navigate(`/${relatedMovie.title}/detail/`, {state: relatedMovie}), setRelatedMovies([]) ]}
        />
    </div>
  )
}
