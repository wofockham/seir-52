import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// HashRouter is much easier to deploy than BrowserRouter
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';

// routes is just a variable that contains JSX (it's not a function or class component)

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    routes
);
