import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/users/users-actions';
import { nanoid } from 'nanoid';

export const AddUserPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setAge(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const user = { name, age, id: nanoid() };
    dispatch(addUser(user));
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="text" name="age" value={age} onChange={handleChange} />
      </label>
      <button>Save</button>
    </form>
  );
};
