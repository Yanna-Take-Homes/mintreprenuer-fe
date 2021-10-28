import React from 'react';
import Products from './views/Products.js';
import Product from './views/Product.js';
import { Route } from 'react-router-dom';
import AddReview from "./views/AddReview.js";
import Nav from "./components/Nav.js";

const App = () => {
  return ( <div className = 'App' >
    <Nav />
    <div className = 'Routes' > 
      <Route exact path='/' component = { Products } />
      <Route path='/product/:id' component = { Product } />
      <Route path='/add-review/:product_id' component = { AddReview } />
    </div>
  </div> )
}

export default App;
