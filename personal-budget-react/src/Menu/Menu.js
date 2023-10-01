import { Link } from "react-router-dom";

function Menu() {
    return (
      <nav>
        <ul>
            <li><Link to="/about" role="button">About</Link></li>
            <li><Link to="/login" role="button">Login</Link></li>
            <li><Link to="/" role="button">Home</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Menu;
  