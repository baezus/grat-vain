import React, { useEffect, useState } from 'react';

const Splash = ({}) => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <p>{loggedIn}</p>
      <section className="hero is-large" id="heroOne">
        <div className="hero-body">
          <p className="title two">
            Vanity
          </p>
          <p className="subtitle two">
            for poets and poems.
          </p>
        </div>
      </section>
      <section class="hero is-medium" id="heroTwo">
        <div class="hero-body">
          <p class="title two">
            Have your poems workshopped
          </p>
          <p class="subtitle two">
            other people 
          </p>
        </div>
      </section>
      <section class="hero is-medium" id="heroThree">
        <div class="hero-body">
          <p class="title two">
            Read other poems
          </p> 
          <p class="subtitle two">
            Earn gratitude 
          </p>
        </div>
      </section>
      <section class="hero is-medium" id="heroFour">
        <div class="hero-body">
          <p class="title four">
            Connect with poets 
          </p>
          <p class="subtitle four">
            others like you, networking
          </p>
        </div>
      </section>
    </>
  )

}

export default Splash;