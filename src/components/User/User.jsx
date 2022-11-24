import PropTypes from 'prop-types';
import { Paragraph, Span } from './User.styled';
import UpdateUserForm from 'components/UpdateUserForm/UpdateUserForm';

export const User = ({
  user: { name, email, id },
  deleteUser,
  updateUser,
  userToUpdate,
  showUpdateForm,
}) => {
  const isEndsBiz = email.endsWith('biz');
  return (
    <>
      <Paragraph>
        Name: <Span>{name}</Span>
      </Paragraph>
      <Paragraph>
        Email: <Span isRed={isEndsBiz}>{email}</Span>
      </Paragraph>
      <button onClick={() => deleteUser({ id, name })}>Delete</button>
      <button onClick={() => showUpdateForm(id)}>Update user</button>
      {userToUpdate && userToUpdate.id === id && (
        <UpdateUserForm updateUser={updateUser} userToUpdate={userToUpdate} />
      )}
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isOnline: PropTypes.string,
  }),
};
