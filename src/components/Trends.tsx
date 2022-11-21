import {TrendingMovie} from '../models';

type TrendsProps = {

    trendingMovies: TrendingMovie[]
}

export const Trends = ({trendingMovies}: TrendsProps) => {

  return (
    <section className="mx-1 mt-10  " id='tendencias'>
        <div className="flex justify-between">
            <h2 className="font-bold text-purple-900">Trends</h2>
            <button className="px-4 py-1 rounded-md bg-purple-900 text-slate-50">More</button>
        </div>
        <article className="mt-5 overflow-x-scroll flex gap-x-2">
            {trendingMovies.map(movie => (
                <div className="" key={movie.id}>
                    <img 
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                      className="w-36 h-30 rounded-lg img cursor-pointer"
                    />
                </div>
            ))}
        </article>
    </section>
  )
}
