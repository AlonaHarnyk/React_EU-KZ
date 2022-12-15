import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchEvents } from 'services/eventsApi';

export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation()
  // console.log(location)

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    events && (
      <>
        <ul>
          {events.map(({ name, id }) => (
            <li key={id}>
              <Link to={id} state={{from: location}}>{name}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </>
    )
  );
};
