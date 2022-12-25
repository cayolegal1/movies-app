import {movies_api} from './api';
import {Movie, TrendingMovie, MovieCategory, ApiServiceInterface} from '../models';
import {movieDataFormatter} from '../helpers';
import {AxiosResponse} from 'axios';


class ApiServices implements ApiServiceInterface {
    
    getTrendingMovies = (): Promise<TrendingMovie[] | void> => 
    movies_api.get('trending/movie/day', {params: {page: 1}})
    .then(({data}) => movieDataFormatter(data?.results))
    .catch(error => console.log(`Ocurrió un error al consultar las películas en tendencia: ${error.message}`));
    
    getMovieCategories = (): Promise<MovieCategory[] | void> => 
    movies_api.get('genre/movie/list')
    .then(({data}) => data?.genres)
    .catch(error => console.log(`Ocurrió un error al consultar las categorías: ${error.message}`));
    
    getMoviesByCategory = (id: number): Promise<Movie[] | void> => 
    movies_api.get('discover/movie', {
        params: {with_genres: id}
    }).then(({data}: AxiosResponse) => movieDataFormatter(data?.results))
    .catch(error => console.log(`Ocurrió un error al consultar las categorías: ${error.message}`));
}

export const api_services = new ApiServices();

    