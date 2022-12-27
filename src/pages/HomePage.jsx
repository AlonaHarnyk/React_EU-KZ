import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from 'redux/users/users-selectors';
import { deleteUser } from 'redux/users/users-actions';

export const HomePage = () => {
  const users = useSelector(getUsers);
  console.log(users);
  const dispatch = useDispatch();

  return (
    <ul>
      {users.map(({ name, age, id }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <button
            onClick={() => {
              dispatch(deleteUser(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
