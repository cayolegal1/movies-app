import React from 'react'
import {useNavigate} from 'react-router-dom'

export const MovieDetailHeader = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between gap-x-1 mx-4'>
        <p 
        className='text-xs text px-2 py-1 text-white font-medium bg-purple-900 md:p-2 rounded cursor-pointer'
        onClick={() => navigate(-1)}>
        Back
        </p>

        {/* <p className="font-bold title">Movie detail</p> */}

        <p 
        className='text-xs text px-2 py-1 text-white font-medium bg-purple-900 md:p-2 rounded cursor-pointer'
        onClick={() => navigate('/')}>
        Home
        </p>
    </div>
  )
}
