import {memo} from 'react';
import {useNavigate} from 'react-router-dom';
import {TrendingMovie} from '../models';
import {Loading} from './Loading';

type TrendsProps = { trendingMovies: TrendingMovie[], loading: boolean };

export const Trends = memo(({trendingMovies, loading}: TrendsProps) => {
  const navigate = useNavigate();
  return (
    <section className="mx-1 mt-10  " id='tendencias'>
        <div className="flex justify-between">
            <h2 className="font-bold text-purple-900">Trends</h2>
            <button className="px-4 py-1 rounded-md bg-purple-900 text-slate-50">More</button>
        </div>
        <article className={`mt-5 overflow-x-scroll flex gap-x-2 ${loading && 'justify-center'}`}>
            {!loading 
              ? trendingMovies.map(movie => {
                const title = movie.title.replace(/[,?]/g, '')
                return (
                  <div key={movie.id}>
                      <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        className="w-36 h-30 rounded-lg img cursor-pointer"
                        title={movie.title}
                        onClick={() => navigate(`/${title}/detail/`, {state: movie})}
                      />
                  </div>
              )}) : (
                <Loading />
              )}
        </article>
    </section>
  )
})
