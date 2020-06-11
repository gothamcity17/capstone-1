import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ addtocart }) {
  
  var total = 0
  var stock = 0

  console.log(addtocart);
  return (
    <>
      <header className='App-Header'>
        <Link to='/'> Home </Link>

        <Link to='/product'> Products </Link>
      </header>

      {addtocart.map((item) => {
        total += item.price
        stock += item.quantity
        return (
          <div id='Cart-Items'>
            <hr></hr>
            <img
              src={process.env.PUBLIC_URL + item.img}
              alt={item.imgAlt}
              className='Images'
            />
            <p className='Details'> {item.price} </p>
            <hr></hr>
          </div>
        );
      })}

      <div className='End'>
    <p> Total: {total} </p>
    <p> Number: {stock} </p>
        <button> Continue to Payment </button>
      </div>
    </>
  );
}
