import { useFetchEvent } from 'hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';
export const EventSubPage = () => {
  const event = useFetchEvent();
  console.log(event);
  const location = useLocation()
  // console.log(location)

  return (
    event && (
      <>
        <h2>{event.name}</h2>
        <img src={event.images[0].url} alt={event.name} width="400" />
        <Link to='details' state={location.state}>More details</Link>
      </>
    )
  );
};
