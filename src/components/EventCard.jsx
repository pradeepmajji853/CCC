import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';

function EventCard({ imageUrl, altText, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open(link, '_blank'); // Opens the link in a new tab
  };

  return (
    <div className="event-card" onClick={handleClick}>
      <img src={imageUrl} alt={altText} className="event-image" />
    </div>
  );
}

export default EventCard;
