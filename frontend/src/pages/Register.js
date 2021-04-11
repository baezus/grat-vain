import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {

  const [data, setData] = useState({
    name: '',
    display: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // useEffect(() => {
  //   const fetchData = async() => {
  //     const result = await axios(
  //       'https://localhost:2737/api/v1/users/register'
  //     );
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);

  const handleNameInputChange = (event) => {
    event.persist();
    setData((data) => ({
      ...data,
      name: event.target.value,
    }));
  };

  const handleDisplayInputChange = (event) => {
    event.persist();
    setData((data) => ({
      ...data,
      display: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setData((data) => ({
      ...data,
      email: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="registerForm is-grouped-right" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" value={data.name} name="name" type="text" placeholder="First Name" onChange={handleNameInputChange} disabled={submitted}/>
        </div>
      </div>
      {submitted && !data.name && <span id="name-error">Please enter a name.</span>}
      <div className="field">
        <label className="label">Display Name</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="Display Name" name="display" value={data.display} onChange={handleDisplayInputChange}/>
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
      </div>
      {submitted && !data.display && <span id="display-error">Please enter a display name.</span>}
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-danger" type="email" placeholder="Email" name="email" value={data.email} onChange={handleEmailInputChange}/>
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
      </div>
      {submitted && !data.email && <span id="email-error">Enter an email address.</span>}
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input is-medium" type="password" placeholder="Password"></input>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={handleSubmit}>Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
      {submitted && <div className="success-message">Success! You have registered successfully.</div>}
    </div>
  )
};

export default Register;