import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

// Image base path
const basePath = import.meta.env.BASE_URL + 'plants/';

// Six plants grouped into 3 categories: Succulents, Ferns, Flowering
const plants = [
  { id: 1, name: 'Aloe Vera', category: 'Succulent', price: 10, img: `${basePath}aloe.jpg` },
  { id: 2, name: 'Snake Plant', category: 'Succulent', price: 9, img: `${basePath}snake.jpg` },
  { id: 3, name: 'Boston Fern', category: 'Fern', price: 12, img: `${basePath}fern.jpeg` },
  { id: 4, name: 'Maidenhair Fern', category: 'Fern', price: 11, img: `${basePath}Maidenhair.jpeg` },
  { id: 5, name: 'Peace Lily', category: 'Flowering', price: 15, img: `${basePath}lily.jpg` },
  { id: 6, name: 'Anthurium', category: 'Flowering', price: 13, img: `${basePath}anthurium.jpeg` }
];

// Group by category
const categories = ['Succulent', 'Fern', 'Flowering'];

function ProductPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = id => cartItems.some(item => item.id === id);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Our Plants</h2>

      {categories.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            {plants
              .filter(p => p.category === cat)
              .map(plant => (
                <div
                  key={plant.id}
                  style={{
                    border: '1px solid #ccc',
                    padding: '1rem',
                    borderRadius: '8px',
                    width: '180px',
                    textAlign: 'center',
                    backgroundColor: '#f9f9f9'
                  }}
                >
                  <img src={plant.img} alt={plant.name} width="100%" height="120px" style={{ objectFit: 'cover' }} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => dispatch(addToCart(plant))}
                    disabled={isInCart(plant.id)}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: isInCart(plant.id) ? '#ccc' : '#4CAF50',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: isInCart(plant.id) ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;
