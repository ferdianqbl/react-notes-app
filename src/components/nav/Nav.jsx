// import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Navbar.css";
import navData from "../../utils/navData";
import Logo from "./NoteIO.svg";

const Nav = () => {
  const routes = useParams();

  const toggleHandler = () => {
    document
      .querySelector(".navbar-toggler--nav")
      .classList.toggle("toggler-active");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      id="my-navbar"
    >
      <div className="container">
        <Link className="navbar-brand img-fluid" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleHandler}
        >
          <div className="navbar-toggler--nav">
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 justify-content-center align-items-center">
            {navData.map((nav) => (
              <li className="nav-item" key={nav.id}>
                <Link
                  className={
                    nav.className +
                    (Object.values(routes)[0] === nav.name.toLowerCase()
                      ? " active"
                      : "")
                  }
                  to={nav.link}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
