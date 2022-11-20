import { FormEvent } from "react";

type HeaderProps = {

    search: string,
    setSearch: (state: string) => any,
    handleSubmitSearch: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

export const Header = ({search, setSearch, handleSubmitSearch}: HeaderProps) => {
  
  return (
    <header className="py-10 flex flex-col gap-y-4">
        <h1 className=" text-purple-900 text-xl font-bold">MoviesInfo</h1>
        <form className="flex w-full mx-1" onSubmit={handleSubmitSearch}>
            <input 
              type="text" 
              placeholder="Avengers"
              className="p-3 text-purple-600 w-full rounded-md search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-purple-900 w-12 rounded-r-lg">🔍</button>
        </form>
    </header>
  )
}
