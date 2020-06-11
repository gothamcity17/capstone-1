import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox';
import data from '../inventory.json'

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
        <Link to='/'> Home </Link>

        <Link to='/cart'> Cart </Link>

        <SearchBox
          placeholder='Pick a shoe'
          handleChange={(e) => props.Test(e.target.value)}
        />
      </header>

      {props.searchBoolean === true
        ? props.searchProducts.map((inventory, index) => (
            <div className='Items' key={inventory.id}>
              <img
                src={process.env.PUBLIC_URL + inventory.img}
                alt={inventory.imgAlt}
                className='Images'
              />
              <div className='Info'>
                <p>{inventory.manufacturer} </p>
                <p>{inventory.name}</p>
                <hr></hr>
                <p>{inventory.category}</p>
                <p>${inventory.price}</p>
                <p>#{inventory.serial}</p>
                <p>Stock: {inventory.inventory}</p>
                <button
                  className='Add-Button'
                  onClick={() => {
                    if (inventory.inventory > 0) ReduceInventory(inventory.id);
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
                <p>{inventory.manufacturer} </p>
                <p>{inventory.name}</p>
                <hr></hr>
                <p>{inventory.category}</p>
                <p>${inventory.price}</p>
                <p>#{inventory.serial}</p>
                <p>Stock: {inventory.inventory}</p>
                <button
                  className='Add-Button'
                  onClick={() => {
                    if (inventory.inventory > 0) ReduceInventory(inventory.id);
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
    </>
  );
};
export default Product;
