import React from 'react';

const Navbar = () => {

  return(
    <>
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="navbar-brand">
          <a className="navbar-item" id="home">
            VAIN
          </a>
        </div>
        <div className="navbar-menu">
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
      </nav>
    </>
  )
}

export default Navbar;