import {movies_api} from './api';
import {TrendingMovie, MovieCategory, ApiServiceInterface} from '../models';
import {trendingDataFormatter} from '../helpers';

class ApiServices implements ApiServiceInterface {

    getTrendingMovies = (): Promise<TrendingMovie[] | void> => 
        movies_api.get('trending/movie/day', {params: {page: 1}})
        .then(({data}) => trendingDataFormatter(data?.results))
        .catch(error => console.log(`Ocurrió un error al consultar las películas en tendencia: ${error.message}`));

    getMovieCategories = (): Promise<MovieCategory[] | void> => 
        movies_api.get('genre/movie/list')
        .then(({data}) => data?.genres)
        .catch(error => console.log(`Ocurrió un error al consultar las categorías: ${error.message}`));
}


export const api_services = new ApiServices();

