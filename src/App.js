// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Change this line
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch data from your live API endpoint
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList shows={shows} />} />
        <Route path="/show/:id" element={<ShowDetail shows={shows} />} />
      </Routes>
    </Router>
  );
};

export default App;
