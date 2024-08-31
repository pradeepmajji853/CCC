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
          link="https://www.instagram.com/p/C5n1ENkhWQG/?img_index=1" 
          overlayText="Ethical Hacking Workshop"
        />
        <EventCard
          imageUrl="assets/Events/InformationSecurity.png"
          altText="Another Event"
          link="https://www.instagram.com/p/CyYl6rgBd5m/" 
          overlayText="Information Security Workshop"
        />
        <EventCard
          imageUrl="assets/Events/Tectasy.png"
          altText="Another Event"
          link="https://www.instagram.com/p/C3T9ZwkhS7J/" 
          overlayText="Tectasy"
        />
        <EventCard
          imageUrl="assets/Events/IDCSS.png"
          altText="Another Event"
          link="https://www.instagram.com/p/Cw5KSGTI3wH/?img_index=1" 
          overlayText="IDCSS"
        />
      </div>
    </div>
  );
}

export default HomeEvents;
