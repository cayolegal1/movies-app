import {useState, useEffect, FormEvent, SetStateAction, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Header, Trends, MoviesCategories} from '../components';
import {movies_api, api_services} from '../services';
import {TrendingMovie, HomePageState, Movie} from '../models';
import { MoviesContext } from '../context';

export const HomePage = () => {

  const [state, setState] = useState<HomePageState>({search: '', trendingMovies: [], loading: true});
  const {search, trendingMovies, loading} = state;
  const {categories} = useContext(MoviesContext)

  const navigate = useNavigate();
   
  const handleSubmitSearch = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if(search !== '') {
        const {data: {results}} = await movies_api.get('search/movie', {params: { "query": search}});
        const filter_movies = results.filter((mov: Movie) => mov.overview !== '');
        navigate(`/${search}`, {state: {data: filter_movies, search: search}});
        setState({...state, search: ''});
    }
  }

  const getTrendingMovies = (): Promise<SetStateAction<TrendingMovie[] | void[]>> | void => {
    //if(!localStorage.getItem('trends'))
      return api_services.getTrendingMovies()
      .then((data: TrendingMovie | any) => [setState(prevState => ({...prevState, trendingMovies: data}))])
    //else setState(JSON.parse(localStorage.getItem('trends') || ''));
  }

  const getMoviesByCategory = (id: number, category: string): Promise<void> => {
    return api_services.getMoviesByCategory(id).then(data => navigate(`${category}/movies`, {state: {data, category}}))
  }
            
  useEffect(() => {
    getTrendingMovies()
    setTimeout(() => {
        setState(prev => ({...prev, loading: false}))
    }, 500);
  }, [])
  
  return (
    <main>
      <div className='mx-4'>

        <Header 
          search={search}
          setState={setState} 
          handleSubmitSearch={handleSubmitSearch} 
        />

        <Trends 
          trendingMovies={trendingMovies}
          loading={loading}
        />

        <MoviesCategories 
          categories={categories} 
          getMoviesByCategory={getMoviesByCategory} 
        />

      </div>
    </main>
  ) 
}
