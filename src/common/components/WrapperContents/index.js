import styles from './index.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { getServers } from '../../../redux/servers/selectors';
import { fetchUserData, saveActiveItem } from '../../../redux/servers/actions';
import Cookies from 'universal-cookie';
import Sidebar from '../Sidebar';
import SidebarItem from '../SidebarItem';
import {
  AddChannelIcon,
  ChannelSearchIcon,
  DownloadAppIcon,
  LogoIcon,
} from '../icons';

function WrapperContents({ children }) {
  const serversData = useSelector(getServers);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const cookies = new Cookies();
    dispatch(fetchUserData(navigate, cookies));
    // eslint-disable-next-line
  }, []);

  function onClickServer(server) {
    return () => {
      navigate(`channels/${server._id}`);
      dispatch(saveActiveItem(server._id));
    };
  }
  function onClickMenuItem(menuItemName) {
    return () => {
      navigate(`${menuItemName}`);
      dispatch(saveActiveItem(menuItemName));
    };
  }
  function onClickPrivateMessages(privateMessages) {
    return () => {
      navigate('channels/');
      dispatch(saveActiveItem(privateMessages));
    };
  }

  return (
    <div className={styles.wrapperContent}>
      <Sidebar>
        <SidebarItem
          name={'Private messages'}
          icon={<LogoIcon style={{ height: '20px', width: '26px' }} />}
          onClick={onClickPrivateMessages('Private messages')}
          active={
            location.pathname.startsWith('/channels/@me') ||
            location.pathname === '/nitro'
          }
        />
        <div className={styles.separator}></div>
        {serversData.servers.servers.map((server) => {
          return (
            <SidebarItem
              key={server._id}
              name={server.name}
              photo={server.photo}
              onClick={onClickServer(server)}
              active={server._id === serversData.servers.activeServer}
            />
          );
        })}
        <SidebarItem
          green={true}
          name={'Add server'}
          icon={<AddChannelIcon />}
          onClick={null}
        />
        <SidebarItem
          green={true}
          name={'Explore'}
          icon={<ChannelSearchIcon />}
          onClick={onClickMenuItem('guild-discovery')}
          active={'guild-discovery' === serversData.servers.activeServer}
        />
        <div className={styles.separator}></div>
        <SidebarItem
          green={true}
          name={'Download'}
          icon={<DownloadAppIcon />}
          onClick={null}
        />
      </Sidebar>
      {children}
    </div>
  );
}

export default WrapperContents;
