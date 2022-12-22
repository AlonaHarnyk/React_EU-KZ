import { Link, Outlet, useLoaderData, useNavigation } from 'react-router-dom';

export const EventsPage = () => {
  const events = useLoaderData();
  const { state } = useNavigation();
  return (
    <>
      {state === 'loading' && 'LOADING..'}
      <ul>
        {events.map(({ name, id }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
