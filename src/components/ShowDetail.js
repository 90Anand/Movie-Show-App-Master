// src/components/ShowDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const ShowDetail = ({ shows }) => {
  const { id } = useParams();
  const show = shows.find(show => show.show.id === parseInt(id, 10));
  const [ticketBooked, setTicketBooked] = useState(false);

  // New state to store form data
  const [formData, setFormData] = useState({
    movieName: show.show.name,
    // Add other relevant details here
    // For example:
    // genre: show.show.genres ? show.show.genres.join(', ') : '',
    // language: show.show.language,
  });

  const handleBookTicket = () => {
    // Open a form or take any other action with the form data
    console.log('Form Data:', formData);

    // Implement the logic to book a ticket (you can use local storage)
    setTicketBooked(true);
  };

  const handleChange = (e) => {
    // Update form data when input fields change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="detail-container">
      <div className="detail-card">
        {show.show.image && show.show.image.original && (
          <img src={show.show.image.original} alt={show.show.name} />
        )}
        <div className="detail-content">
          <h2>{show.show.name}</h2>
          {show.show.genres && (
            <p>Genres: {show.show.genres.join(', ')}</p>
          )}
          <p>Status: {show.show.status}</p>
          <p>Language: {show.show.language}</p>
          <p>Summary: {show.show.summary}</p>
          {!ticketBooked ? (
            <div>
              {/* Button to open the form */}
              <button onClick={handleBookTicket}>Book Ticket</button>
              {/* Form for booking ticket (hidden by default) */}
              <form
                className={`ticket-form ${ticketBooked ? 'hidden' : ''}`}
              >
                {/* Example input for movie name */}
                <label>
                  Movie Name:
                  <input
                    type="text"
                    name="movieName"
                    value={formData.movieName}
                    onChange={handleChange}
                    readOnly // Make it read-only since it's pre-filled
                  />
                </label>
                {/* Add other input fields for relevant details */}
                {/* For example: */}
                {/* <label>
                  Genre:
                  <input
                    type="text"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                  />
                </label> */}
                {/* <label>
                  Language:
                  <input
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                  />
                </label> */}
                {/* Confirm Booking button */}
                <button type="button" onClick={handleBookTicket}>
                  Confirm Booking
                </button>
              </form>
            </div>
          ) : (
            <p>Ticket is booked!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
