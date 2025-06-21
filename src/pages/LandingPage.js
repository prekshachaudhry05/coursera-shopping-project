import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ background: 'url(/bg.jpg)', padding: '3rem', color: '#fff', textAlign: 'center' }}>
      <h1>GreenGlow Plants</h1>
      <p>Your one-stop shop for beautiful indoor plants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;