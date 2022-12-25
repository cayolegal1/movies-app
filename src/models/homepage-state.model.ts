import {TrendingMovie} from "./";

export type HomePageState = {
    search: string, 
    trendingMovies: TrendingMovie[],
    loading: boolean
  };