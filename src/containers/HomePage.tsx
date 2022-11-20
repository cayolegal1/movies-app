import {useState, useEffect, FormEvent, SetStateAction} from 'react';
import {Header, Trends, MoviesCategories} from '../components';
import {movies_api, api_services} from '../services';
import {MovieCategory, TrendingMovie} from '../models'

export const HomePage = () => {

  const [search, setSearch] = useState<string>('');  
  const [trendingMovies, setTrendingMovies] = useState<TrendingMovie[]>([]);
  const [categories, setCategories] = useState<MovieCategory[]>([]);

  const handleSubmitSearch = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if(search !== '') {
        const {data: {results}} = await movies_api.get('search/movie', { params: { "query": search} });
        setSearch('');
    }
  }
  const getTrendingMovies = (): Promise<SetStateAction<TrendingMovie[] | void>> => {
    return api_services.getTrendingMovies().then((data: TrendingMovie | any) => setTrendingMovies(data))
  }

  const getMovieCategories = (): Promise<SetStateAction<MovieCategory | void>> => {
    return api_services.getMovieCategories().then((data: MovieCategory[] | any) => setCategories(data))
  }
            
  useEffect(() => {
    getTrendingMovies();
    getMovieCategories();
    console.log(categories);
  }, [search])

  return (
    <main>
      <div className='mx-4'>
        <Header 
          search={search} 
          setSearch={setSearch} 
          handleSubmitSearch={handleSubmitSearch} 
        />
        <Trends trendingMovies={trendingMovies} />
        <MoviesCategories categories={categories} />
      </div>
    </main>
  )
}
