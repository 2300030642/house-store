import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">
        🛒 Cart ({totalQuantity})
      </Link>
    </header>
  );
}

export default Header;
