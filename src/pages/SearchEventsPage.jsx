import { useState, useEffect } from 'react';
import { useSearchParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchEventsByName } from 'services/eventsApi';

export const SearchEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('eventname');
  const location = useLocation()

  useEffect(() => {
    if (query === null || query === '') return;
    async function fetchEvents() {
      const data = await fetchEventsByName(query);
      setEvents(data);
    }
    fetchEvents();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ eventname: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>Search</button>
      </form>
      {events && (
        <>
          <ul>
            {events.map(({ name, id }) => (
              <li key={id}>
                    <Link to={id} state={{ from: location }}>{name}</Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};
