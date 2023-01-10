import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/users/users-selectors';
import { deleteUser } from 'redux/users/users-operations';
import { getIsLoading } from 'redux/users/users-selectors';


export const UsersList = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading)
  return (
    <ul>
      {users.map(({ id, name, email }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <button onClick={() => dispatch(deleteUser(id))}>{isLoading ? 'Deleting' : "Delete"}</button>
        </li>
      ))}
    </ul>
  );
};
