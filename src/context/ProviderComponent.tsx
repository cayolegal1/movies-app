import {useState, createContext, useContext, FormEvent, SetStateAction, ReactNode, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Movie, MovieCategory, Context } from '../models';
import { api_services, movies_api } from '../services';

export const MoviesContext = createContext<Context>({categories: []});


type StoreProps = {

    children: ReactNode
}

export const MoviesStore = ({children}: StoreProps) => {

    const [categories, setCategories] = useState([]);
    //const navigate = useNavigate();

    const handleSubmitSearch = async (event: FormEvent<HTMLFormElement>, search: string): Promise<Movie[] | void> => {
        event.preventDefault();
        if(search !== '') {
            const {data: {results}} = await movies_api.get('search/movie', {params: { "query": search}});
            const filter_movies = results.filter((mov: Movie) => mov.overview !== '');
            return filter_movies;
            //navigate(`/${search}`, {state: {movies: filter_movies, search: search}});
        }
    }

    const getMovieCategories = (): Promise<SetStateAction<MovieCategory[] | void>> => {
        return api_services.getMovieCategories().then((data: MovieCategory[] | any) => setCategories(data));
    }

    useEffect(() => {
        getMovieCategories()
    }, [])

    return (
    <MoviesContext.Provider value={{categories}}>
        {children}
    </MoviesContext.Provider>
    )
}
