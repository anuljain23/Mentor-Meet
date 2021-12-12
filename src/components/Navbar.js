import React from "react";

function nav_bar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="https://inpd8.csb.app/">
          <img
            id="brand-logo"
            src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_c315c7fdf027b5d503c5dd733f556813/mentorli.png"
            alt="brand-logo"
          />
          <span className="brand-title">Mentor Meet</span>
        </a>
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
              <a
                className="nav-link active"
                aria-current="page"
                href="#home-banner"
              >
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
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
                <li>
                  <a className="dropdown-item" href="ss">
                    Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="ss">
                    Business
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="ss">
                    Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="ss">
                    Marketing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="ss">
                    Lifestyle
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home-features"
                aria-disabled="true"
              >
                Login <i class="fa fa-sign-in" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home-features"
                aria-disabled="true"
              >
                Sign Up <i class="fa fa-user-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default nav_bar;
