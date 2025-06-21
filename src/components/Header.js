import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <h2>GreenGlow Plants</h2>
      <nav>
        <Link to="/products">Products</Link> | <Link to="/cart">Cart ({total})</Link>
      </nav>
    </header>
  );
}

export default Header;
