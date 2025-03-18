import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/slices/CartSlice';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
              <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
              <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
              <button onClick={() => dispatch(removeItem(item))}>Delete</button>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => alert('Coming Soon')}>Checkout</button>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
