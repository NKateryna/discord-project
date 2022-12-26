import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Nitro from '../pages/dashboard/nitro';
import Loading from '../pages/loading';
import Login from '../pages/login';
import Register from '../pages/register';
import FriendsRouters from './routes-friends';

function AppRoutes() {
  return (
    <BrowserRouter>    
        <Routes>
          <Route path="/*">
            <Route index element={<Loading />} />
            <Route path="login/" element={<Login />} />
            <Route path="register/" element={<Register />} />
            <Route path="dashboard/*">
              <Route index element={<Dashboard />} />
              <Route path="friends/*">
                <Route index element={<Navigate replace to="online" />} />
                <Route path="*" element={<FriendsRouters />} />
              </Route>
              <Route path="nitro/" element={<Nitro />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
