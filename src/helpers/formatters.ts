import {TrendingMovie} from '../containers';

export const trendingDataFormatter = (data: TrendingMovie[]) => {
    return data.map(movie => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview, 
        genre_ids: movie.genre_ids,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average
    }))
}