import { Navigate, Route, Routes } from 'react-router-dom';
import WrapperFriendsPages from '../../common/components/WrapperFriendsPages';
import NavBarDirectMessages from '../../common/components/NavBarDirectMessages';
import Nitro from '../../pages/nitro';
import FriendsRouters from './routes-friends/index';
import Server from '../../pages/server';
import GuildDiscovery from '../../pages/guild-discovery';

const Protected = () => {
  return (
    <Routes>
      <Route index element={<Navigate replace to="/channels/@me" />} />
      <Route path="channels/@me/*">
        <Route
          path="*"
          element={
            <NavBarDirectMessages>
              <WrapperFriendsPages>
                <FriendsRouters />
              </WrapperFriendsPages>
            </NavBarDirectMessages>
          }
        />
      </Route>
      <Route path="channels/*">
        <Route path=":serverId/" element={<Server />} />
      </Route>
      <Route
        path="nitro/"
        element={
          <NavBarDirectMessages>
            <Nitro />
          </NavBarDirectMessages>
        }
      />
      <Route path="guild-discovery/" element={<GuildDiscovery />} />
    </Routes>
  );
};

export default Protected;
