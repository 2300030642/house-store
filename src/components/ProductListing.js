import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulents' },
  { id: 2, name: 'Snake Plant', price: 12, category: 'Indoor' },
  { id: 3, name: 'Peace Lily', price: 15, category: 'Flowering' },
  { id: 4, name: 'Fiddle Leaf Fig', price: 25, category: 'Indoor' },
  { id: 5, name: 'Cactus', price: 8, category: 'Succulents' },
  { id: 6, name: 'Spider Plant', price: 9, category: 'Indoor' },
];

function ProductListing() {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
