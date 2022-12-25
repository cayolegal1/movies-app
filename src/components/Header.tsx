import {FormEvent, Dispatch, SetStateAction, memo} from "react";
import {HomePageState} from '../models';

type HeaderProps = {
    search: string,
    setState: Dispatch<SetStateAction<HomePageState>>,
    handleSubmitSearch: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

export const Header = memo(({setState, handleSubmitSearch, search}: HeaderProps) => { 
  return (
    <header className="py-10 flex flex-col gap-y-4 md:mx-20">
        <h1 className=" text-purple-900 text-xl font-bold md:text-center">MoviesInfo</h1>
        <form className="flex w-full mx-1" onSubmit={handleSubmitSearch}>
            <input 
              type="text" 
              placeholder="Avengers"
              className="p-3 text-purple-600 w-full rounded-md search"
              value={search}
              onChange={(e) => setState((prev: HomePageState) => ({...prev, search: e.target.value}))}
            />
            <button className="bg-purple-900 w-12 rounded-r-lg">🔍</button>
        </form>
    </header>
  )
})
