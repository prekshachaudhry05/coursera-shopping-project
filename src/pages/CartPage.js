import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQty, decreaseQty, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalCost = cart.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <p>Total Plants: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>
      {cart.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={item.img} alt={item.name} width="50" />
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartPage;
