import {useLocation, useNavigate} from 'react-router-dom';
import goBack from '../assets/turn-back.png';

export const SearchResult = () => {

  const {state: {movies, search}} = useLocation();
  const navigate = useNavigate();

  return (
    <section className='mx-4 py-4 md:mx-20' id='results'>
      <div className='flex' onClick={() => navigate(-1)}>
        <div className='flex items-center gap-x-1 cursor-pointer'>
          {/* <img src={goBack} className='w-3 h-4 md:w-5 md:h-5'/> */}
          <p className='text-xs text px-2 py-1 text-white font-medium bg-purple-900 md:p-2 rounded'>Back</p>
        </div>
        <h1 className='m-auto font-bold text-purple-900 text-lg'>Results for '<span className='capitalize'>{search}</span>'</h1>
      </div>
      <article className='grid grid-cols-2 grid-rows-1 gap-4 py-4 items-center md:grid-cols-3 md:gap-x-2 md:gap-y-12'>
        {/*@ts-ignore*/}
        {movies.map(movie => 
          (
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                className='h-3/4 rounded cursor-pointer md:h-1/4'
                alt={movie.title} 
                title={movie.title} 
              />
            </div>
          )
        )}
      </article>
    </section> 
  
  )
}
