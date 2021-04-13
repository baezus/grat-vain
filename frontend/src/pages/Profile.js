import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import withAuth from "../components/withAuth";

const Profile = () => {
  let display = localStorage.getItem('user');
  const [displayName, setDisplayName] = useState(display);

  useEffect(() => {
    display = localStorage.getItem('user');
    setDisplayName(display);
  }, []);

  return (
    <div>
      <h1 className="title is-1">Welcome, {displayName}</h1>
      <article className="message is-dark" style={{ marginTop: 40 }}>
        <div className="message-header">
          <p>{displayName}</p>
        </div>
        <div className="message-body"> 
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </article>
    </div>
  );
};

export default withAuth(Profile);