import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './Button';
import { UsersList } from './UsersList';
import { Form } from './AddForm';
import { fetchUsers } from 'redux/users/users-operations';
import { getIsLoading, getError } from 'redux/users/users-selectors';

export const App = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)

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
        {/* {isLoading && <h1>LOADIANG...</h1>} */}
          <UsersList />
          {!isFormShown && !isLoading && !error && <Button text="Add user" clickHandler={showForm} />}
          {isFormShown && <Form closeForm={closeForm}/>}
        </>
      ) : (
        <Button text="Show users" clickHandler={showUsersList} />
      )}
      {error && <p>{error.message}</p>}
    </>
  );
};
