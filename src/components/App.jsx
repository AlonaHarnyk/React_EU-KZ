import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';

import { HomePage } from 'pages/HomePage';
import { AddUserPage } from 'pages/AddUserPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="add" element={<AddUserPage />} />
      </Route>
    </Routes>
  );
};
