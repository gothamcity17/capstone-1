import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <header className='App-Header'>
      <div className='Nav'>
        <Link to='/product'> Products </Link>

        <Link to='/cart'> Cart </Link>
        </div>
      </header>

      <div> <h1> Welcome to your neighborhood shoe store. </h1> </div>
    </>
  );
}
export default Home;
