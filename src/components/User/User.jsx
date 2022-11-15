import PropTypes from 'prop-types';

export const User = ({ user: { name, email, isOnline } }) => {
  return (
    <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {isOnline && <p>Is online: {isOnline}</p>}
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
