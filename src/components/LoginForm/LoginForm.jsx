import { useState, useContext } from 'react';
import { AuthContext } from 'context/authContext';

export const LoginForm = () => {
  const [password, setPassword] = useState('');


  const { login } = useContext(AuthContext);

  const handleChange = event => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(password);
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        placeholder="Your password"
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  );
};
