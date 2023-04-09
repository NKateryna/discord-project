import { Navigate, Route, Routes } from 'react-router-dom';
import WrapperFriendsPages from '../../common/components/WrapperFriendsPages';
import WrapperNavigationBar from '../../common/components/WrapperNavigationBar';
import Nitro from '../../pages/nitro';
import FriendsRouters from './routes-friends/index';

const Protected = () => {
  return (
    <Routes>
      <Route index element={<Navigate replace to="/channels/" />} />
      <Route path="channels/*">
        <Route index element={<Navigate replace to="@me" />} />
        <Route
          path="*"
          element={
            <WrapperNavigationBar>
              <WrapperFriendsPages>
                <FriendsRouters />
              </WrapperFriendsPages>
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
