import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox';
import data from '../inventory.json';

const Product = (props) => {
  function ReduceInventory(id) {
    const Copy = data;
    for (var i = 0; i < Copy.length; i++) {
      if (id === Copy[i].id) {
        Copy[i].inventory--;
      }
    }
  }
  return (
    <>
      <header className='App-Header'>
        <div className='Nav'>
          <Link to='/' className='Home'> Home </Link>

          <Link to='/cart'> Cart </Link>
        </div>
      </header>

      <div className='search'>
        <SearchBox
          placeholder='Pick a shoe'
          handleChange={(e) => props.Test(e.target.value)}
        />
      </div>
      <div className='item-grid'>
        {props.searchBoolean === true
          ? props.searchProducts.map((inventory, index) => (
              <div className='Items' key={inventory.id}>
                <img
                  src={process.env.PUBLIC_URL + inventory.img}
                  alt={inventory.imgAlt}
                  className='Images'
                />
                <div className='Info'>
                  <i>{inventory.manufacturer} </i>
                  <p>{inventory.name}</p>
                  <hr></hr>
                  <p>Price: ${inventory.price}</p>
                  <p>Serial #{inventory.serial}</p>
                  <p>Type: {inventory.category}</p>
                  <p>{inventory.inventory} left in stock</p>
                  <button
                    className='Add-Button'
                    onClick={() => {
                      if (inventory.inventory > 0)
                        ReduceInventory(inventory.inventory);
                      props.setAddtocart(
                        props.addtocart.concat(props.items[index])
                      );
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          : props.items.map((inventory, index) => (
              <div className='Items' key={inventory.id}>
                <img
                  src={process.env.PUBLIC_URL + inventory.img}
                  alt={inventory.imgAlt}
                  className='Images'
                />
                <div className='Info'>
                  <i>{inventory.manufacturer} </i>
                  <p>{inventory.name}</p>
                  <hr></hr>
                  <p>Price: ${inventory.price}</p>
                  <p>Serial #{inventory.serial}</p>
                  <p>Type: {inventory.category}</p>
                  <p>{inventory.inventory} left in stock</p>
                  <button
                    className='Add-Button'
                    onClick={() => {
                      if (inventory.inventory > 0)
                        ReduceInventory(inventory.id);
                      props.setAddtocart(
                        props.addtocart.concat(props.items[index])
                      );
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};
export default Product;
