import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/users/usersSlice';
import { nanoid } from 'nanoid';
import { getStatus } from 'servises/answerApi';

export const AddUserPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setAge(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const status = await getStatus();
    const user = { name, age, id: nanoid(), status };
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
