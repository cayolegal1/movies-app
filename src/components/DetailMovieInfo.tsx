import React from 'react'
import {Movie} from '../models';

type DetailProps = {

    state: Movie
}

export const MovieDetailInfo = ({state}: DetailProps) => {
  return (
    <>
        <div className="flex justify-between mt-4 title">
            <h1 className="font-bold text-xl">
                {state.title}
            </h1>
            <span className="font-medium">
                <span className="mr-1">⭐️</span>
                {state.vote_average}
            </span>
        </div>

        <p className="mt-4">
            {state?.overview}
        </p>
        <h5 className="mt-4 text-purple-900 font-semibold">
            Released date: <span className='text-black font-normal'>{state?.release_date}</span>
        </h5>
  </>
  )
}
