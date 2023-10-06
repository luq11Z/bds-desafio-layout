import './styles.scss';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <NavLink to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="dscatalog-navbar"
        >
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                CATÁLOGO
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
