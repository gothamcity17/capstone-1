import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

const Product = ({ items, addtocart, setAddtocart, searchField }) => {
  return (
    <>
      <header className='App-Header'>
        <Link to='/'> Home </Link>

        <Link to='/cart'> Cart </Link>

        <SearchBox placeholder="Pick a shoe" handleChange={(e) => this.setState({searchField:e.target.value})} />
        
      </header>

      {items.map((inventory, index) => (
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
            <p>Stock: {inventory.quantity}</p>
            <button
              className='Add-Button'
              onClick={() => {
                setAddtocart(addtocart.concat(items[index]));
                console.log(addtocart);
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
