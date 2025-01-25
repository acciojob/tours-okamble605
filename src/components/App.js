import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State for storing the tours data and loading state
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the tours data from the API on component mount
  useEffect(() => {
    fetch("http://localhost:5000/api/tours") // Replace with your API URL if different
      .then((response) => response.json())
      .then((data) => {
        setTours(data); // Store the fetched data in state
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch(() => setLoading(false)); // Handle errors (if any)
  }, []); // Empty dependency array ensures it runs only once on component mount

  // JSX for rendering the tours data
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tour Packages</h1>
        {loading ? (
          <p>Loading...</p> // Show loading message while fetching data
        ) : (
          <div className="tour-container">
            {tours.map((tour) => (
              <div key={tour.id} className="tour-card">
                <img src={tour.image} alt={tour.name} className="tour-image" />
                <h2>{tour.name}</h2>
                <p>{tour.info}</p>
                <p className="tour-price">Price: ${tour.price}</p>
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
