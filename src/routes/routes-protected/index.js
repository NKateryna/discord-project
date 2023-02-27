import { Navigate, Route, Routes } from 'react-router-dom';
import WrapperNavigationBar from '../../common/components/WrapperNavigationBar';
import Nitro from '../../pages/nitro';
import FriendsRouters from './routes-friends/index';

const Protected = () => {
  return (
    <Routes>
      <Route index element={<Navigate replace to="/friends/online" />} />
      <Route path="friends/*">
        <Route index element={<Navigate replace to="online" />} />
        <Route
          path="*"
          element={
            <WrapperNavigationBar>
              <FriendsRouters />
            </WrapperNavigationBar>
          }
        />
      </Route>
      <Route
        path="nitro/"
        element={
          <WrapperNavigationBar>
            <Nitro />
          </WrapperNavigationBar>
        }
      />
    </Routes>
  );
};

export default Protected;
