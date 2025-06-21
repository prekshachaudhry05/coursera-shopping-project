import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Aloe Vera', category: 'Succulent', price: 10, img: '/plants/aloe.jpg' },
  { id: 2, name: 'Boston Fern', category: 'Fern', price: 12, img: '/plants/fern.jpg' },
  { id: 3, name: 'Cactus', category: 'Cactus', price: 8, img: '/plants/cactus.jpg' },
  { id: 4, name: 'Peace Lily', category: 'Flowering', price: 15, img: '/plants/lily.jpg' },
  { id: 5, name: 'Snake Plant', category: 'Succulent', price: 9, img: '/plants/snake.jpg' },
  { id: 6, name: 'Maidenhair Fern', category: 'Fern', price: 11, img: '/plants/maidenhair.jpg' }
];

function ProductPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = id => cartItems.find(item => item.id === id);

  return (
    <div>
      <h2>Our Plants</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {plants.map(plant => (
          <div key={plant.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '150px' }}>
            <img src={plant.img} alt={plant.name} width="100%" />
            <h4>{plant.name}</h4>
            <p>${plant.price}</p>
            <button
              onClick={() => dispatch(addToCart(plant))}
              disabled={isInCart(plant.id)}
            >
              {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
