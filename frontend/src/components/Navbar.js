import React, { useState } from 'react';
import { NavLink, withRouter } from "react-router-dom";

const Navbar = ({ history }) => {

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const isAuth = !!localStorage.getItem("token");

  const loginUser = () => {
    localStorage.setItem("token", "some-login-token");
    history.push("/profile/visit");
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

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
            <div className="navbar-end">
              <NavLink className="navbar-item" activeClassName="is-active" to="/poets" exact>
                For Poets 
              </NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/editors" exact>
                For Editors 
              </NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/register" exact>
                Register
              </NavLink>
            <div className="navbar-end">
              {!isAuth ? (
              <NavLink className="navbar-item" activeClassName="is-active" to="/login" onClick={loginUser} exact>
                {/* <button className="button is-white" onClick={loginUser}>
                  Log In
                </button> */}
                Log In 
              </NavLink>
             

              
              ) : (

              <button className="button is-black" onClick={logoutUser}>
                Log out
              </button>
              )}
            </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Navbar);