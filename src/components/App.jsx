import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './Button';
import { UsersList } from './UsersList';
import { Form } from './AddForm';
import { Filter } from './Filter';
import { fetchUsers } from 'redux/users/users-operations';
import { selectIsLoading, selectError } from 'redux/users/users-selectors';

import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';
import { UserAuthMenu } from './UserAuthMenu';

export const App = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const showUsersList = () => {
    setIsListShown(true);
    dispatch(fetchUsers());
  };

  const showForm = () => {
    setIsFormShown(true);
  };

  const closeForm = () => {
    setIsFormShown(false);
  };

  return (
    <>
      <UserAuthMenu />
      <RegisterForm />
      <LoginForm />
      {isListShown ? (
        <>
          {/* {isLoading && <h1>LOADIANG...</h1>} */}
          <Filter />
          <UsersList />
          {!isFormShown && !isLoading && !error && (
            <Button text="Add user" clickHandler={showForm} />
          )}
          {isFormShown && <Form closeForm={closeForm} />}
        </>
      ) : (
        <Button text="Show users" clickHandler={showUsersList} />
      )}
      {error && <p>{error.message}</p>}
    </>
  );
};
