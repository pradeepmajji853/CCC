import React from 'react';
import EventCard from './EventCard';
import './HomeEvents.css';

function HomeEvents() {
  return (
    <div className="home-events">
      <h1>Events</h1>
      <div className="events-container">
        <EventCard
          imageUrl="assets/Events/EthicalHacking.png"
          altText="Ethical Hacking Event"
          link="" 
        />
        <EventCard
          imageUrl="assets/Events/InformationSecurity.png"
          altText="Another Event"
          link="" 
        />
        <EventCard
          imageUrl="assets/Events/Tectasy.png"
          altText="Another Event"
          link="" 
        />
        <EventCard
          imageUrl="assets/Events/IDCSS.png"
          altText="Another Event"
          link="" 
        />
      </div>
    </div>
  );
}

export default HomeEvents;
