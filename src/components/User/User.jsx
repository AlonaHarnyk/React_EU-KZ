import PropTypes from 'prop-types';
import { Paragraph, Span, Title } from './User.styled';

export const User = ({ user: { name, email, isOnline } }) => {
  const isEndsBiz = email.endsWith('biz')
  console.log(isEndsBiz)
  return (
    <>
      <Title>User</Title>
      <Paragraph>Name: <Span>{name}</Span></Paragraph>
      <Paragraph>Email: <Span isRed={isEndsBiz}>{email}</Span></Paragraph>
      {isOnline && <Paragraph>Is online: {isOnline}</Paragraph>}
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
