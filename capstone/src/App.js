import React, { useState } from 'react';
import data from './inventory.json';
import Product from './Components/Product';
import Cart from './Components/Cart';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  const [items] = useState(data);
  const [addtocart, setAddtocart] = useState([]);
  const [Input, setInput] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchBoolean, setSearchBoolean] = useState(false);

  let InventoryArray = [];

  const Test = (pizza) => {
    setSearchBoolean(true);
    if (pizza === '') setSearchBoolean(false);

    InventoryArray = [];
    setSearchProducts(InventoryArray);
    setInput(pizza);
    let InputToLowerCase = Input.toLowerCase();

    console.log(InputToLowerCase);

    data.forEach((Shoe) => {
      const name = Shoe.name.toLowerCase();
      const manufacturer = Shoe.manufacturer.toLowerCase();
      const serial = Shoe.serial.toString();
      const price = Shoe.price.toString();
      if (name.search(InputToLowerCase) !== -1) {
        InventoryArray.push(Shoe);
        setSearchProducts(InventoryArray);
        console.log(searchProducts);
      } else if (manufacturer.search(InputToLowerCase) !== -1) {
        InventoryArray.push(Shoe);
        setSearchProducts(InventoryArray);
        console.log(searchProducts);
      } else if (serial.search(InputToLowerCase) !== -1) {
        InventoryArray.push(Shoe);
        setSearchProducts(InventoryArray);
        console.log(searchProducts);
      } else if (price.search(InputToLowerCase) !== -1) {
        InventoryArray.push(Shoe);
        setSearchProducts(InventoryArray);
        console.log(searchProducts);
      }
    });
  };

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
            Test={Test}
            searchProducts={searchProducts}
            searchBoolean={searchBoolean}
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
