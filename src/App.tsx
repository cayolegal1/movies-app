import { useState, FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './containers';
import { Footer } from './components';
import './App.css';

const App: FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
      <Footer />
    </BrowserRouter> 
  )
}

export default App
