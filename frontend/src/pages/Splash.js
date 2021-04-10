import React, { useEffect, useState } from 'react';

const Splash = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <p>{loggedIn}</p>
      <section className="hero">
        <div className="hero-body">
          <p className="title">
            You're so vain.
          </p>
        </div>
      </section>
    </>
  )

}

export default Splash;