import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Welcome to Green Haven!</h1>
      <p>Discover the best plants to bring life to your home.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
