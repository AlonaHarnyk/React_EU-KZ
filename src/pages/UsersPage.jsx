import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/Button';
import { UsersList } from '../components/UsersList';
import { Form } from '../components/AddForm';
import { Filter } from '../components/Filter';
import { fetchUsers } from '../redux/users/users-operations';
import { selectIsLoading, selectError } from '../redux/users/users-selectors';

export const UsersPage = () => {
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
      {isListShown ? (
        <>
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
