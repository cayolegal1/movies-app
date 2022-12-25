import {useNavigate} from 'react-router-dom';
import { api_services } from '../services';
import {MovieCategory} from '../models';

type MovieCategoriesProps = {

    categories?: MovieCategory[] 
}

export const MovieDetailCategories = ({categories}: MovieCategoriesProps) => {
    const navigate = useNavigate();

    const getMoviesByCategory = (id: number, category: string): Promise<void> => {
    return api_services.getMoviesByCategory(id).then(data => navigate(`/${category}/movies`, {state: {data, category}}))
    }

    return (
        <>
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
        </>
  )
}
