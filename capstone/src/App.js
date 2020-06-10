import React, { useState } from 'react';
import inventory from './inventory.json';
import Product from './Components/Product';
import Cart from './Components/Cart';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  const [items] = useState(inventory);
  const [addtocart, setAddtocart] = useState([]);

  return (
    <div className='App'>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route
        path='/product'
        render={() => (
          <Product
            items={items}
            addtocart={addtocart}
            setAddtocart={setAddtocart}
          />
        )}
      ></Route>

      <Route
        path='/cart'
        render={() => (
          <Cart
            items={items}
            addtocart={addtocart}
            setAddtocart={setAddtocart}
            
          />
        )}
      ></Route>
    </div>
  );
}

export default App;
