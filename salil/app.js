// Import React and necessary hooks
import React, { useEffect, useState } from 'react';

function App() {
  // State to store Bitcoin price data
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [error, setError] = useState(null);

  // Fetch data from backend when the component mounts
  useEffect(() => {
    async function fetchBitcoinPrice() {
      try {
        // Fetch from the backend API endpoint
        const response = await fetch('/api/bitcoin-price');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        // Update state with fetched data
        setBitcoinPrice(data.price);
      } catch (err) {
        // Handle errors
        setError(err.message);
      }
    }

    fetchBitcoinPrice();
  }, []);

  // Render data or error message
  return (
    <div className="App">
      <h1>Bitcoin Price Tracker</h1>
      {error ? (
        <p>Error fetching data: {error}</p>
      ) : bitcoinPrice !== null ? (
        <p>Current Bitcoin Price: ${bitcoinPrice}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

