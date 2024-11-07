import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BlogList from './components/BlogList';
import Article from './components/Article';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
