import {useState, useEffect, FormEvent, SetStateAction} from 'react';
import {useNavigate} from 'react-router-dom';
import {Header, Trends, MoviesCategories} from '../components';
import {movies_api, api_services} from '../services';
import {MovieCategory, TrendingMovie, HomePageState} from '../models';

export const HomePage = () => {

  const [state, setState] = useState<HomePageState>({search: '', trendingMovies: [], categories: []});

  const {search, trendingMovies, categories} = state;

  const navigate = useNavigate();

  const handleSubmitSearch = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if(search !== '') {
        const {data: {results}} = await movies_api.get('search/movie', { params: { "query": search} });
        navigate(`/${search}`, {state: {movies: results, search: search}});
        setState({...state, search: ''});
    }
  }
  const getTrendingMovies = (): Promise<SetStateAction<TrendingMovie[] | void>> | void => {
    //if(!localStorage.getItem('trends'))
      return api_services.getTrendingMovies()
      .then((data: TrendingMovie | any) => setState(prevState => ({...prevState, trendingMovies: data})))
    //else setState(JSON.parse(localStorage.getItem('trends') || ''));
  }

  const getMovieCategories = (): Promise<SetStateAction<MovieCategory[] | void>> => {
    return api_services.getMovieCategories().then((data: MovieCategory[] | any) => setState(prevState => ({...prevState, categories: data})));
  }
            
  useEffect(() => {
    getTrendingMovies()
    getMovieCategories()
  }, [])

  return (
    <main>
      <div className='mx-4'>
        <Header 
          state={state}
          setState={setState} 
          handleSubmitSearch={handleSubmitSearch} 
        />
        <Trends trendingMovies={trendingMovies} />
        <MoviesCategories categories={categories} />
      </div>
    </main>
  )
}
