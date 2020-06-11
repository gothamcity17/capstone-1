import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <header className='App-Header'>
        <Link to='/product'> Products </Link>

        <Link to='/cart'> Cart </Link>
      </header>

      <div> This is the Home Page </div>
    </>
  );
}
export default Home;
