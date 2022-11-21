import { MovieCategory, TrendingMovie } from "./";

export type HomePageState = {
    search: string, 
    trendingMovies: TrendingMovie[],
    categories: MovieCategory[]
  };