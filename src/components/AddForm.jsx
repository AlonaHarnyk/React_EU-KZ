import { useDispatch } from 'react-redux';
import { addUser } from 'redux/users/users-operations';

export const Form = ({closeForm}) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      addUser({
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
      })
    );
    closeForm()
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button>Save</button>
    </form>
  );
};
