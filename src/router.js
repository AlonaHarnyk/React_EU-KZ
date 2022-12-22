import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { EventsPage } from 'pages/EventsPage';
import { createBrowserRouter } from 'react-router-dom';
import { fetchEvents, fetchEventById } from 'services/eventsApi';
import { EventSubPage } from 'pages/EventSubPage';
import { ErrorPage } from 'pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/events',
        element: <EventsPage />,
        loader: fetchEvents,
        children: [
          {
            path: ':id',
            element: <EventSubPage />,
            loader: fetchEventById,
          },
        ],
      },
    ],
  },
]);
