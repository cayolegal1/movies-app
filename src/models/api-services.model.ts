import { TrendingMovie, MovieCategory } from "./"

interface Movie extends TrendingMovie {}
export interface ApiServiceInterface {
    getTrendingMovies: () => Promise<TrendingMovie[] | void>,
    getMovieCategories: () => Promise<MovieCategory[] | void>,
    getMoviesByCategory: (id: number) => Promise<Movie[]| void>
}