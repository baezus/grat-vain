import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {

  const [data, setData] = useState({
    name: '',
    display: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handlePasswordInputChange = (event) => {
    event.persist();
    setData((data) => ({
      ...data,
      password: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      'http://127.0.0.1:2737/api/v1/users/register', data)
      .then(() => {
        console.log('result: ', result);
      })
      .catch((err) => {
        console.log('error :', err);
    })
    setSubmitted(true);
  };

  return (
    <div className="registerForm is-grouped-right" onSubmit={handleSubmit}>
      <form className="control">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" value={data.name} name="name" type="text" placeholder="First Name" onChange={handleNameInputChange}/>
        </div>
      </div>

      <div className="field">
        <label className="label">Display Name</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="Display Name" name="display" value={data.display} onChange={handleDisplayInputChange}/>
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-danger" type="email" placeholder="Email" name="email" value={data.email} onChange={handleEmailInputChange}/>
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input is-medium" type="password" placeholder="Password" name="password" value={data.password} onChange={handlePasswordInputChange}/>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" type="submit" >Submit</button>
        </div>
      </div>
      </form>
    </div>
  )
};

export default Register;