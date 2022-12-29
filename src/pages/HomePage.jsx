import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from 'redux/users/users-selectors';
import { deleteUser } from 'redux/users/usersSlice';
import Avatar from 'react-avatar';


export const HomePage = () => {
  const users = useSelector(getUsers);
  console.log(users);
  const dispatch = useDispatch();

  return (
    <ul>
      {users.map(({ name, age, id, status }) => (
        <li key={id}>
          <Avatar name={name} size='40' round={true}/>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Is online: {status}</p>
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
