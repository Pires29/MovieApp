import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './components/SearchContext';
import Home from './Pages/Home';
import MoviePage from './Pages/MoviePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <SearchProvider>
        <Navbar/>
        <Routes>
          {/* Defina a rota da Home como a primeira */}
          <Route path="/home" element={<Home />} />
          <Route path="/moviepage" element={<MoviePage />} />
          {/* Redirecionamento padrão para a página inicial */}
          <Route path="*" element={<Home />} />
        </Routes>
      </SearchProvider>
    </Router>
  );
}

export default App;
