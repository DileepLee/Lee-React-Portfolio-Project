// components/Home.js
import { Link } from 'react-router-dom';
import './index.css'

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Lee Creations Sample Project !!</h1>
      <h2 className="h2">Front-end Developer Single Page user registration data storage Project</h2>
      <p className="phara-element">Join us today and explore exclusive content created just for you. Don't miss out!</p>
      <Link to="/register"><button className="register-button">Register Now</button></Link>
    </div>
  );
}

export default Home;
