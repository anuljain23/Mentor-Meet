import React from "react";
import { Link } from "react-router-dom";
import categories from "../temporary_data_files/categories";

function Navbar() {
  return (
    //<nav className="navbar fixed-top navbar-expand-lg">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to={``} className="navbar-brand">
          <img
            id="brand-logo"
            src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_c315c7fdf027b5d503c5dd733f556813/mentorli.png"
            alt="brand-logo"
          />
          <span className="brand-title">Mentor Meet</span>
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
          <ul className="navbar-nav me-auto ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={``}
                className="nav-link active"
                aria-current="page"
                href="#home-banner"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#home-banner"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories.map((category) => {
                  return (
                    <li key={category.id}>
                      <Link
                        to={`category/${category.id}`}
                        className="dropdown-item"
                      >
                        {category.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home-features"
                aria-disabled="true"
              >
                Login <i className="fa fa-sign-in" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home-features"
                aria-disabled="true"
              >
                Sign Up <i className="fa fa-user-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
