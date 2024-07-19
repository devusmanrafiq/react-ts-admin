import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'components/layout/layout';

import Dashboard from 'pages/dashboard/dashboard';
import Users from 'pages/users/users';

function PrivateRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export { PrivateRoutes };
