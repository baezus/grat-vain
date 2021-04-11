import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return(
    <>
      <nav className="navbar is-transparent is-fixed" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <NavLink className="navbar-item" activeClassName="is-active" to="/" exact>
              Vanity
            </NavLink>
            <a 
              onClick={() => {setOpen(!isOpen)}}
              role="button"
              className={`navbar-burger burger ${isOpen && "is-active"}`}
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div 
            className={`navbar-menu ${isOpen && "is-active"}`}>
            <div className="navbar-start">
              <NavLink className="navbar-item" activeClassName="is-active" to="/poets" exact>
                For Poets 
              </NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/editors" exact>
                For Editors 
              </NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/login" exact>
                Log In 
              </NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/register" exact>
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;