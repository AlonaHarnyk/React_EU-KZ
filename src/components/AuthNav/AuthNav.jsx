import { useContext } from 'react';
import { AuthContext } from 'context/authContext';
import { Notification } from 'components/Notification/Notification';
import { Button } from 'components/Button/Button';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const AuthNav = () => {
  const { isAuth, logout } = useContext(AuthContext);

  return isAuth ? (
    <>
      <Notification text="You are welcome!" />
      <Button text="Log out" clickHandler={logout} />
    </>
  ) : (
    <LoginForm />
  );
};
