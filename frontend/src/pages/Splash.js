import React, { useEffect, useState } from 'react';

const Splash = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <p>This is the splash page baby</p>
      <p>{loggedIn}</p>
    </>
  )

}

export default Splash;