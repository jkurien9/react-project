import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './pages/Index';
import Product from './pages/Product';
import Contact from './pages/Contact'

function App() {
  return (
   <>
    <Router>
      <Route exact path="/" component={Index} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/contact" component={Contact} />
    </Router>
   </>
  );
}

export default App;
