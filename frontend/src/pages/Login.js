import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

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
      'http://127.0.0.1:2737/api/v1/users/login', data)
      .then((result) => {
       console.log('result: ', result.data.token);
       let token = result.data.token;
       localStorage.setItem('token', token)
      })
      .catch((err) => {
        console.log('error :', err);
    })
    setSubmitted(true);
    console.log('Login result: ', result);
  };

  return (
    <div className="registerForm is-grouped-right" onSubmit={handleSubmit}>
      <form className="control">
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

export default Login;