import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({items,setItems,addtocart,setAddtocart}) {
  console.log(addtocart)
  return (
    <>
      <header className='App-Header'>
        <Link to='/'> Home </Link>

        <Link to='/product'> Products </Link>
      </header>

      <div> Cart Component </div>
    </>
  );
}
