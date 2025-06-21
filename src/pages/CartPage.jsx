import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQty, decreaseQty, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalCost = cart.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>
      <p style={styles.summary}>Total Plants: {totalItems}</p>
      <p style={styles.summary}>Total Cost: ${totalCost.toFixed(2)}</p>

      {cart.length === 0 ? (
        <p style={styles.emptyText}>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={styles.cartItem}>
            <img src={item.img} alt={item.name} style={styles.image} />
            <div style={styles.details}>
              <strong>{item.name}</strong>
              <span>${item.price}</span>
            </div>
            <div style={styles.controls}>
              <button onClick={() => dispatch(increaseQty(item.id))} style={styles.controlBtn}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(decreaseQty(item.id))} disabled={item.quantity === 1} style={styles.controlBtn}>-</button>
            </div>
            <button onClick={() => dispatch(removeItem(item.id))} style={styles.deleteBtn}>Delete</button>
          </div>
        ))
      )}

      <button onClick={() => setCheckoutMessage('Congratulations! Your order is placed and it will be delivered to you safely very soon.')} style={styles.checkoutBtn}>
        Checkout
      </button>

      {checkoutMessage && (
        <p style={styles.checkoutMessage}>{checkoutMessage}</p>
      )}

      <Link to="/products">
        <button style={styles.continueBtn}>Continue Shopping</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'sans-serif',
  },
  summary: {
    fontSize: '1rem',
    margin: '0.5rem 0',
  },
  emptyText: {
    fontStyle: 'italic',
    color: '#777',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    margin: '1rem 0',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  details: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  controlBtn: {
    padding: '0.3rem 0.6rem',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  deleteBtn: {
    marginLeft: '1rem',
    backgroundColor: '#e53935',
    color: 'white',
    border: 'none',
    padding: '0.4rem 0.7rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  checkoutBtn: {
    marginTop: '1.5rem',
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '0.7rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  continueBtn: {
    marginTop: '1rem',
    backgroundColor: '#757575',
    color: 'white',
    padding: '0.6rem 1.2rem',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  checkoutMessage: {
    marginTop: '1rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#1976d2',
  },
};

export default CartPage;
