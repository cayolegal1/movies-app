export interface Movie {
    id: number,
    title: string,
    overview: string,
    genre_ids: number[],
    poster_path: string,
    vote_average: number,
    release_date?: string,
    results?: Movie[],
}