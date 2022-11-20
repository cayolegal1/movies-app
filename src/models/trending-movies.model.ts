export type TrendingMovie = {

    id: number,
    title: string,
    overview: string,
    genre_ids: number[],
    poster_path: string,
    vote_average: number,
    results?: TrendingMovie[]
};