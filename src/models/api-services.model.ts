import { TrendingMovie, MovieCategory } from "./"

export interface ApiServiceInterface {

    getTrendingMovies: () => Promise<TrendingMovie[] | void>,
    getMovieCategories: () => Promise<MovieCategory[] | void>
}