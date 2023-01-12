import { useSelector, useDispatch } from 'react-redux';
import {
  selectVisibleUsers,
  selectIsLoading,
} from '../redux/users/users-selectors';
import { deleteUser } from 'redux/users/users-operations';
import { useState } from 'react';
import { UpdateForm } from './UpdateForm';

export const UsersList = () => {
  const [userToUpdate, setUserToUpdate] = useState(null);
  const users = useSelector(selectVisibleUsers);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const showUpdateForm = userId => {
    const user = users.find(({ id }) => id === userId);
    setUserToUpdate(user);
  };

  const closeForm = () => {
    setUserToUpdate(null)
  }

  return (
    <ul>
      {users.map(({ id, name, email }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <button onClick={() => dispatch(deleteUser(id))}>
            {isLoading ? 'Deleting' : 'Delete'}
          </button>
          <button onClick={() => showUpdateForm(id)}>Update user</button>
         {userToUpdate && userToUpdate.id === id && <UpdateForm userToUpdate={userToUpdate} closeForm={closeForm}/>}
        </li>
      ))}
    </ul>
  );
};
