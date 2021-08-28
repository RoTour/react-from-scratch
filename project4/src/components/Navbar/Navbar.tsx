import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

type NavbarProps = {}

const Navbar: FC<NavbarProps> = () => {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink exact={true} className={"navbar-brand fw-bolder"} to={"/"}>Ariège MGA</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
              aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggle-icon"/>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarColor02">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact={true} className={"nav-link fs-6"} to={"/"}>Accueil</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact={true} className={"nav-link fs-6"} to={"/localisation"}>Localisation</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact={true} className={"nav-link fs-6"} to={"/contact-us"}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
};

export default Navbar;
