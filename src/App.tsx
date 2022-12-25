import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MoviesStore} from './context';
import { HomePage, SearchResult, MovieDetail, MoviesByCategory } from './containers';
import { Footer } from './components';
import './App.css';

const App: FC = () => {
  return (
    <MoviesStore>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:movies/' element={<SearchResult />} />
          <Route path='/:movie/detail/' element={<MovieDetail />} />
          <Route path='/:category/movies/' element={<MoviesByCategory />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </MoviesStore>
  )
}

export default App
