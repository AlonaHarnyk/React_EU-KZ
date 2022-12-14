import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from 'services/eventsApi';

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    fetchEventById(eventId).then(setEvent);
  }, [eventId]);

  return event;
};
