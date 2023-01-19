import { useSelector } from 'react-redux';
import { Navigation } from './Navigation';
import { AuthNavigation } from './AuthNavigation';
import { UserAuthMenu } from './UserAuthMenu';
import { selectToken } from 'redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <header>
        <Navigation />
        {token ? <UserAuthMenu /> : <AuthNavigation />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
