import "./Navbar.css";
import { Link } from 'react-router-dom';
export default function Navbar() {

  return (
    <div className="Navbar">
        <h1>CCC</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li> <Link to="/teams">OUR TEAM</Link></li>
        <li> <Link to="/events">Events</Link></li>
      
        <li>
          <Link to="/learning-resources">Learning Resources</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}