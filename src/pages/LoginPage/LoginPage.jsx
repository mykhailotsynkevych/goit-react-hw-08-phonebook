import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/auth-operations';
import s from './LoginPage.module.css';

const LoginPage = () => {
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
      <h1 className="mainTitle">Login Page</h1>

      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.form}>
          <span className={s.inputTitle}> Email </span>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={s.form}>
          <span className={s.inputTitle}> Password </span>
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginPage;
