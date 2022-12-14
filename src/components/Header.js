import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to='/home'>
                Flower
              </NavLink>
              <a class="nav-link" href="/register">
                
              </a>
              <a class="nav-link" href="/signup">
                Signup
              </a>
              <a class="nav-link" href="/contact">
                Contact
              </a>
              <a class="nav-link" href="/about">
                About
              </a>
              <a class="nav-link disabled">Disabled</a>
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
