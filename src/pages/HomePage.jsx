import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/auth/auth-operations';
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 className="mainTitle">Welcome to your Phonebook</h1>
      <h2 className="secondTitle">Login</h2>

      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          <span className="inputTitle">Email</span>
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label className="label">
          <span className="inputTitle">Password</span>
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="button">
          Login
        </button>
      </form>
      <div className="signUpWrapper">
        <p>Not a Member? </p>
        <NavLink to="/register">Signup</NavLink>
      </div>
    </>
  );
};

export default HomePage;