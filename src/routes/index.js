import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FrendsRouters from './Routes/routes-frends';

import Nitro from '../pages/page/dashboard/nitro/nitro';
import Loading from '../pages/page/loading/loading';
import LoginRegister from '../pages/page/login-register/login-register';
import Dashboard from '../pages/page/dashboard/dashboard';

import FriendsOnline from '../pages/page/dashboard/friends/friends-online/friends-online';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*">
          <Route index element={<Loading />} />
          <Route path="login-register/" element={<LoginRegister />} />
          <Route path="dashboard/*">
            <Route index element={<Dashboard />} />
            <Route path="friends/*">
              <Route index element={<FriendsOnline />} />
              {/* default frends-page  */}
              <Route path="*" element={<FrendsRouters />} />
            </Route>
            <Route path="nitro/" element={<Nitro />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
