// src/components/ShowList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const ShowList = ({ shows }) => {
  return (
    <div className="container">
      <div>
        <h2>TV Shows</h2>
        <div className="card-container">
          {shows.map((show) => (
            <div className="card" key={show.show.id}>
              {show.show.image && show.show.image.medium && (
                <img src={show.show.image.medium} alt={show.show.name} />
              )}
              <h3>{show.show.name}</h3>
              {show.show.genres && (
                <p>Genres: {show.show.genres.join(', ')}</p>
              )}
              <p>Status: {show.show.status}</p>
              <Link to={`/show/${show.show.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowList;
