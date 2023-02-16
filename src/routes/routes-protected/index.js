import { Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from '../../pages/dashboard/index';
import Nitro from '../../pages/dashboard/nitro';
import FriendsRouters from './routes-friends/index';

const Protected = () => {
  return (
    <Routes>
      <Route
        index
        element={<Navigate replace to="dashboard/friends/online" />}
      />
      <Route path="dashboard/*">
        <Route index element={<Dashboard />} />
        <Route path="friends/*">
          <Route index element={<Navigate replace to="online" />} />
          <Route path="*" element={<FriendsRouters />} />
        </Route>
        <Route path="nitro/" element={<Nitro />} />
      </Route>
    </Routes>
  );
};

export default Protected;
