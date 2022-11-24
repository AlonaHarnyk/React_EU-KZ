import { Component } from 'react';
import { Section } from './Section/Section';
import { UsersList } from './UsersList/UserList';
import { Button } from './Button/Button';
import AddUserForm from './AddUserForm/AddUserForm';
import { data } from 'data/users';
import { GlobalStyles } from '../utils/GlobalStyles';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    users: data,
    isListShown: false,
    isAddFormShown: false,
    userToUpdate: null
  };

  showUsers = () => {
    this.setState({ isListShown: true });
  };

  deleteUser = ({ id, name }) => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== id),
    }));
    alert(`User with name ${name} is deleted`);
  };

  showAddForm = () => {
    this.setState({ isAddFormShown: true });
  };

  addUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      isAddFormShown: false,
    }));
  };

  updateUser = (user) => {
    const {users} = this.state
    const index = users.findIndex(({ id }) => id === user.id)
    const newUsers = [...users]
    newUsers[index] = user;
    this.setState({ users: newUsers, userToUpdate: null });
  }

  showUpdateForm = (userId) => {
    console.log(userId)
    const { users } = this.state;
    const user = users.find(({ id }) => id === userId)
    this.setState({userToUpdate: user})
  }


  render() {
    const { isListShown, users, isAddFormShown, userToUpdate } = this.state;

    return (
      <>
        <Section>
          {isListShown ? (
            <>
              <UsersList
                users={users}
                deleteUser={this.deleteUser}
                showCompany={this.showCompany}
                updateUser={this.updateUser}
                showUpdateForm={this.showUpdateForm}
                userToUpdate={userToUpdate}
              />
              {isAddFormShown ? (
                <AddUserForm addUser={this.addUser} />
              ) : (
                <Button text="Add user" clickHandler={this.showAddForm} />
              )}
            </>
          ) : (
            <Button text="Show list of users" clickHandler={this.showUsers} />
          )}
        </Section>
        <GlobalStyles />
      </>
    );
  }
}

export default App;
