// components/Navbar.js
import { Link } from 'react-router-dom';
import './index.css';

function Navbar() {
  return (
    <nav>
      <div className="logo">Lee Creations</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/user-details">User Details</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
