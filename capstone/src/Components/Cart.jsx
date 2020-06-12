import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ addtocart, setAddtocart }) {
  var total = 0;
  var stock = 0;

  const clearAll = () => setAddtocart([]);

  return (
    <>
      <header className='App-Header'>
        <div className='Nav'>
          <Link to='/'> Home </Link>

          <Link to='/product'> Products </Link>
        </div>
      </header>
      <br></br>
      <div className='item-grid'>
        {addtocart.map((item) => {
          total += item.price;
          stock += item.quantity;
          return (
            <div className='Items'>
              <img
                src={process.env.PUBLIC_URL + item.img}
                alt={item.imgAlt}
                className='Images'
              />
              <p className='Details'> {item.name} </p>
              <hr></hr>
              <p className='Details'>Price: ${item.price} </p>

              <button onClick={item.deleteItem}> Delete </button>
            </div>
          );
        })}
      </div>
      <br></br>
      <div className='End'>
        <p> Total: {total} </p>
        <p> Number: {stock} </p>
        <button onClick={clearAll}> Clear All </button>
        <button> Continue to Payment </button>
      </div>
    </>
  );
}
