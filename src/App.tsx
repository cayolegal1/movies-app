import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, SearchResult } from './containers';
import { Footer } from './components';
import './App.css';

const App: FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:movies' element={<SearchResult />} />
      </Routes>
      <Footer />
    </BrowserRouter> 
  )
}

export default App
