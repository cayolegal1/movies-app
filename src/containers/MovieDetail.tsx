import {useContext, useEffect, useState, useLayoutEffect} from 'react';
import {useLocation} from "react-router-dom";
import {MoviesContext} from '../context';
import  {MovieDetailHeader, MovieDetailInfo, MovieDetailCategories, DetailRelatedMovie, Loading} from '../components';
import {api_services} from '../services'
import {Movie, MovieCategory} from '../models';

export const MovieDetail = () => {
  //Estados
  const [relatedMovies, setRelatedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const {categories} = useContext(MoviesContext);

  const location = useLocation();
  const {state} = location;

  const movieDetailGenres = categories.filter(cat => state.genre_ids.includes(cat.id));

  const getRelatedMovies = async (): Promise<void> => {
    movieDetailGenres.forEach((gen: MovieCategory) => {
        api_services.getMoviesByCategory(gen.id)
        .then((movies) => {
          //@ts-ignore
          setRelatedMovies([relatedMovies, movies.slice(Math.floor(Math.random() * 3), 9)
            .filter((m: Movie) => m.title !== state.title)]
            .flat()
          )
        }
        ).catch(error => console.log(`Ocurrió un error al obtener las películas similares: ${error.message}`))
    })
  }
  
  useLayoutEffect(() => {
    getRelatedMovies()
    setTimeout(() => setLoading(false), 1000)
  }, [location])

  return (
    <section className="py-4" id="movie_details">
        <MovieDetailHeader />
        <img 
          src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`}
          className='m-auto rounded mt-5 cursor-pointer'
          title={state.title}
          alt={state.title}
        />
      <div className="flex justify-center flex-col mx-7 py-4">

          <MovieDetailInfo state={state} />

          <div className='flex justify-between flex-wrap mt-4 gap-x-3'>
            <MovieDetailCategories categories={movieDetailGenres} />
          </div>

          <div className="mt-4">
            <h5 className="text-purple-900 font-semibold">Similar Movies</h5>
            <article className="flex gap-x-4 overflow-x-scroll mt-2">
              {loading 

                ? <Loading />

                : relatedMovies.map(movie => 
                  <DetailRelatedMovie relatedMovie={movie} setRelatedMovies={setRelatedMovies} />
                 )    
              }
            </article>
          </div>
      </div>
    </section>  
  )
}
