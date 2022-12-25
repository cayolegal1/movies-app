import {memo} from 'react';
import {MovieCategory} from '../models';

type CategoriesProps = {

  categories?: MovieCategory[]
  getMoviesByCategory: any
}

export const MoviesCategories = memo(({categories, getMoviesByCategory}: CategoriesProps) => {
  return (
    <section className='mx-2 mt-10 mb-10' id='categorias'>
      <h2 className='font-bold text-purple-900'>Categories</h2>
      <article className='grid grid-cols-2 grid-rows-1 mt-4 md:mt-8 md:grid-rows-3 md:grid-cols-3 md:gap-x-96'>
        {categories?.map((category, index) => 
          (
            <div 
              key={category.id}
              className='flex category-title text-sm md:text-base md:overflow-visible'
              id={`id${index}`}
              onClick={() => getMoviesByCategory(category.id, category.name)}
            >
              <h3 className='cursor-pointer'>{category.name}</h3>
            </div>
          )
        )}
      </article>
    </section>
  )
})
