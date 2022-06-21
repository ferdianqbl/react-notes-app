import { Link } from "react-router-dom";
import "./Navbar.css";

const Nav = () => (
  <nav
    className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
    id="my-navbar"
  >
    <div className="container">
      <Link className="navbar-brand" to="/notes">
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
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/notes">
              View
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notes/add">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notes/bookmark">
              Bookmark
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
