import {MovieCategory} from '../models';

type CategoriesProps = {

  categories: MovieCategory[]
}

export const MoviesCategories = ({categories}: CategoriesProps) => {
  return (
    <section className='mx-2 mt-10 mb-10' id='categorias'>
      <h2 className='font-bold text-purple-900'>Categories</h2>
      <article className='grid grid-cols-2 grid-rows-1 mt-4'>
        {categories?.map((category, index) => 
          (
            <div key={category.id} className='flex category-title' id={`id${index}` }>
              <h3 className='cursor-pointer'>{category.name}</h3>
            </div>
          )
        )}
      </article>
    </section>
  )
}
