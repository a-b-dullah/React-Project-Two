import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <nav className="Header navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/prodact">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/prodact"
              >
                prodact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
