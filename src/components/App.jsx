import { Component } from 'react';
import { Section } from './Section/Section';
import { UsersList } from './UsersList/UserList';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { data } from 'data/users';
import { GlobalStyles } from '../utils/GlobalStyles';

class App extends Component {
  state = {
    users: data,
    isListShown: false,
    userCompany: ''
  };

  showUsers = () => {
    this.setState({ isListShown: true });
  };

  deleteUser = ({id, name}) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== id)
    }))
    alert(`User with name ${name} is deleted`)
  }

  showCompany = (company) => {
    this.setState({userCompany: company.name})
  }

  hideCompany = () => {
    this.setState({userCompany: ''})
  }

  render() {
    const { isListShown, users, userCompany } = this.state;

    return (
      <>
        <Section>
          {isListShown ? (
            <UsersList users={users} deleteUser={this.deleteUser} showCompany={this.showCompany}/>
          ) : (
            <Button text="Show list of users" clickHandler={this.showUsers} />
          )}
          {userCompany && <Modal company={userCompany} hide={this.hideCompany} />}
        </Section>
        <GlobalStyles />
      </>
    );
  }
}

export default App;
