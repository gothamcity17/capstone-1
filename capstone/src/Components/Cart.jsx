import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ addtocart, setAddtocart, deleteItem }) {
  var cost = 0;
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
        {addtocart.map((item,index) => {
          cost += item.price;
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

              <button onClick={ () => deleteItem (index) }> Delete </button>
            </div>
          );
        })}
      </div>
      <br></br>
      <div className='End'>
        <p> Shoes: {stock} </p>
        <p> Subtotal: {cost} </p>
        <p> Total: {cost * 1.0825} </p>

        <br></br>
        <button onClick={clearAll}> Clear All </button>
        <button> Continue to Payment </button>
      </div>
    </>
  );
}
