import React from 'react';

const Navbar = () => {

  return(
    <>
      <nav className="navbar is-transparent is-fixed" role="navigation" aria-label="main-navigation">
        <div className="navbar-brand">
          <a className="navbar-item" id="home">
            Vanity
          </a>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-end">
            <a className="navbar-item">
              For Poets 
            </a>
            <a className="navbar-item">
              For Editors 
            </a>
            <a className="navbar-item">
              Log In 
            </a>
            <a className="navbar-item">
              Register
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;