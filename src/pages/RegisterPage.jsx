import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FaRegEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

import operations from '../redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const passwordRegex = /^[A-Za-z]{8,}$/;

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'password') {
      // Проверка валидности пароля при каждом изменении
      setIsPasswordValid(passwordRegex.test(value));
      setPassword(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
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
          <div className="passwordInputWrapper">
            {password && (
              <div
                onClick={() => setIsPasswordShown(!isPasswordShown)}
                className="togglePasswordVisibility"
              >
 

                {isPasswordShown ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaRegEye size={18} />
                )}

              </div>
            )}
            <input
              className={`${
                isPasswordValid ? 'inputValid' : 'inputInvalid'
              } input`}
              type={isPasswordShown ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <span className="passworText">
            Min 8 characters long
          </span>
        </label>
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
