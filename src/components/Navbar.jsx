import "./Navbar.css";
import { Link } from 'react-router-dom';
export default function Navbar() {

  return (
    <div className="Navbar"  >
        <h1>CCC</h1>
      <ul>
        <li>
          <Link to="/" className="nav-link" >Home</Link>
        </li>
        <li> <Link to="/teams" className="nav-link" >OUR TEAM</Link></li>
        <li> <Link to="/events" className="nav-link" >Events</Link></li>
      
        <li>
          <Link to="/learning-resources" className="nav-link" >Learning Resources</Link>
        </li>
        <li>
          <Link to="/contact-us" className="nav-link" >Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
