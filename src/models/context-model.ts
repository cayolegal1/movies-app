import { FormEvent } from 'react'
import {MovieCategory, Movie} from './'

export type Context = {
    categories: MovieCategory[]
    //handleSubmitSearch?: (event: FormEvent<HTMLFormElement>, search: string) => Promise<Movie[] | void>
};