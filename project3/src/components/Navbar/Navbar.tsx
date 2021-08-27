import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css"

type NavbarProps = {}

const Navbar: FC<NavbarProps> = () => {
  return <nav className="navbar navbar-expand-lg navbar-info bg-info mb-3">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
              aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink exact={true} activeClassName={styles.myActive} className={`nav-link text-white ${styles.myNavLink}`} to={'/'}>Home</NavLink>
          </li>
          <li className={"nav-item"}>
            <NavLink exact={true} activeClassName={styles.myActive} className={`nav-link text-white ${styles.myNavLink}`} to={'/countries'}>Countries</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
};

export default Navbar;
