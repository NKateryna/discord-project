import { Navigate, Route, Routes } from 'react-router-dom';
import WrapperFriendsPages from '../../common/components/WrapperFriendsPages';
import NavBarDirectMessages from '../../common/components/NavBarDirectMessages';
import Nitro from '../../pages/nitro';
import Server from '../../pages/server';
import GuildDiscovery from '../../pages/guild-discovery';
import Сonversation from '../../pages/conversation';

const Protected = () => {
  return (
    <Routes>
      <Route index element={<Navigate replace to="/channels/@me" />} />
      <Route
        path="channels/@me/*"
        element={
          <NavBarDirectMessages>
            <Routes>
              <Route index element={<WrapperFriendsPages />} />
              <Route path=":conversationId/" element={<Сonversation />} />
            </Routes>
          </NavBarDirectMessages>
        }
      />
      <Route
        path="nitro/"
        element={
          <NavBarDirectMessages>
            <Nitro />
          </NavBarDirectMessages>
        }
      />
      <Route path="channels/*">
        <Route index element={<Navigate replace to="/channels/@me" />} />
        <Route path=":serverId/" element={<Server />} />
      </Route>
      <Route path="guild-discovery/" element={<GuildDiscovery />} />
    </Routes>
  );
};

export default Protected;
