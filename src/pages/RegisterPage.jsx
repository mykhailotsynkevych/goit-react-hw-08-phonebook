import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 className="mainTitle">Registration Page</h1>
      <h2 className="secondTitle">Register</h2>

      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          <span className="inputTitle">Name</span>
          <input
            className="input"
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
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
          <span className="inputTitle">min 8 characters</span>
        </label>
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
