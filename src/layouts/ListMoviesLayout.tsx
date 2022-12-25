import {Children, ReactNode} from 'react'
import {useNavigate} from 'react-router-dom';

type MoviesListProps = {

    children: ReactNode | ReactNode[]
}

export const MoviesListLayout = ({children}: MoviesListProps) => {
  const navigate = useNavigate();
  return (
    <section className='mx-4 py-4 md:mx-20 md:py-8' id='results'>
      <div className='flex gap-x-4' onClick={() => navigate(-1)}>
        <div className='flex items-center gap-x-1 cursor-pointer'>
          <p className='text-xs text px-2 py-1 text-white font-medium bg-purple-900 md:p-2 rounded'>Back</p>
        </div>
        {Children.toArray(children)[0]}
      </div>
      <article 
       className='grid grid-cols-2 grid-rows-1 gap-4 py-4 items-center justify-items-center md:grid-cols-3 md:gap-x-3 md:gap-y-12 md:py-10'
      >
        {Children.toArray(children).slice(1)}
      </article>
    </section> 
  )
}
