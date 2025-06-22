import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}bg.jpg)`,  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        padding: '4rem',
        color: '#ffffff',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'black' }}>GreenGlow Plants</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'black' }}>
        Welcome to GreenGlow — your one-stop destination for lush indoor houseplants
        that brighten your space and boost your mood. We deliver freshness directly to your home.
      </p>
      <Link to="/products">
        <button
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
