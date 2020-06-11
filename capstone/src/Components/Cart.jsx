import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ addtocart }) {
  console.log(addtocart);
  return (
    <>
      <header className='App-Header'>
        <Link to='/'> Home </Link>

        <Link to='/product'> Products </Link>
      </header>

      {addtocart.map((item) => {
        return (
          <div id='Cart-Items'>
            <img
              src={process.env.PUBLIC_URL + item.img}
              alt={item.imgAlt}
              className='Images'
            />
            <hr></hr>
            <p className='Details'> {item.price} </p>
          </div>
        );
      })}

      <div className='End'>
        <p> Total: </p>
        <button> Continue to Payment </button>
      </div>
    </>
  );
}
