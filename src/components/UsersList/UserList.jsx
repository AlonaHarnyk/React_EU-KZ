import PropTypes from 'prop-types';

import { User } from 'components/User/User';

export const UsersList = ({ users, deleteUser, showCompany }) => {
  return (
    <ul>
      {users.map(a => {
        return (
          <li key={a.id}>
            <User user={a} deleteUser={deleteUser} showCompany={showCompany} />
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
