import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Heroes from './pages/Heroes';
import About from './pages/About';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route path="heroes" element={<Heroes />} />
            <Route path="heroes/:id" element={<Heroes />} />
            
            <Route path="about" element={<About />} />
            
            <Route path="*" element={<div>404 Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;