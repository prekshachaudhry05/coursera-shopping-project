import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#e8f5e9' }}>
      <h2 style={{ margin: 0 }}>GreenGlow Plants</h2>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({total})</Link>
      </nav>
    </header>
  );
}

export default Header;
