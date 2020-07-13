import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from '../src/components/Index';
import Product from '../src/components/Product';
import Contact from '../src/components/Contact'

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
