import axios from 'axios';

const KEY = "tIj1kC332ExvV8vs1uBAp1fasaO5ERpG";
axios.defaults.baseURL = "https://app.ticketmaster.com/discovery/v2/";

export async function fetchEvents() {
  const response = await axios('events', {
    params: {
      apikey: KEY,
      size: 20
    }
  })
  return response.data._embedded.events
}

export async function fetchEventById(id) {
  const response = await axios(`events/${id}`, {
    params: {
      apikey: KEY,
    }
  })
  return response.data
}

export async function fetchEventsByName(keyword) {
  const response = await axios('events', {
    params: {
      apikey: KEY,
      size: 20,
      keyword
    }
  })
  return response.data._embedded.events
}

