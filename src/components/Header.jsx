// src/components/Header.jsx
import { Link } from "react-router-dom";
import "../App.css"; // or wherever your header styles are

function Header() {
  return (
    <header className="header">
      <h2 className="logo">My Blog</h2>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Blog
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/publications" className="nav-link">
          Publications
        </Link>
      </nav>
    </header>
  );
}

export default Header;
