import { User } from './User/User';
import { Section } from './Section/Section';
import { UsersList } from './UsersList/UserList';
import { data } from 'data/users';

export const App = () => {
  return (
    <>
      <Section>
        <User user={data[0]} />
      </Section>
      <Section title='List of users'>
      <UsersList users={data} />
      </Section>
    </>
  );
};
