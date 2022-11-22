import PropTypes from 'prop-types';
import { Paragraph, Span } from './User.styled';

export const User = ({ user: { name, email, id, company}, deleteUser, showCompany }) => {
  const isEndsBiz = email.endsWith('biz')
  return (
    <>
      <Paragraph>Name: <Span>{name}</Span></Paragraph>
      <Paragraph>Email: <Span isRed={isEndsBiz}>{email}</Span></Paragraph>
      <button onClick={() => deleteUser({ id, name })}>Delete</button>
      <button onClick={() => showCompany(company)}>Show company</button>
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
