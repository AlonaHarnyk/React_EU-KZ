import PropTypes from 'prop-types';

import { User } from 'components/User/User';

export const UsersList = ({ users, deleteUser, updateUser, userToUpdate, showUpdateForm }) => {
  return (
    <ul>
      {users.map(a => {
        return (
          <li key={a.id}>
            <User user={a} deleteUser={deleteUser} updateUser={updateUser} userToUpdate={userToUpdate} showUpdateForm={showUpdateForm} />
          </li>
        );
      })}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
