import { useNavigate, useLocation } from 'react-router-dom';

import { useFetchEvent } from 'hooks/useFetchEvent';

export const EventDetailsPage = () => {
    const event = useFetchEvent();
    const navigate = useNavigate();
        const location = useLocation()
  console.log(location)
  return (
    <>
      {event && (
        <>
          <button onClick={() => {navigate(location?.state?.from ?? '/')}}>Go back</button>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="400" />
          <p>Main genre: {event.classifications[0].genre.name}</p>
          <p>Main subgenre: {event.classifications[0].subGenre.name}</p>
        </>
      )}
    </>
  );
};
