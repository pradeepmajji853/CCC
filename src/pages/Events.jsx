import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsPage from "../components/EventsPage"
import "./Events.css";

function Events() {
  return (
    <div className='events'>
      <Navbar/>
      <EventsPage/>
      <Footer />
    </div>
  )
}

export default Events
