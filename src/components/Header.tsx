import { FormEvent } from "react";
import {HomePageState} from '../models';

type HeaderProps = {
    state: HomePageState,
    setState: (state: HomePageState) => any,
    handleSubmitSearch: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

export const Header = ({setState, handleSubmitSearch, state}: HeaderProps) => {
  
  return (
    <header className="py-10 flex flex-col gap-y-4 md:mx-20">
        <h1 className=" text-purple-900 text-xl font-bold md:text-center">MoviesInfo</h1>
        <form className="flex w-full mx-1" onSubmit={handleSubmitSearch}>
            <input 
              type="text" 
              placeholder="Avengers"
              className="p-3 text-purple-600 w-full rounded-md search"
              value={state.search}
              onChange={(e) => setState({...state, search: e.target.value})}
            />
            <button className="bg-purple-900 w-12 rounded-r-lg">🔍</button>
        </form>
    </header>
  )
}
