import styles from './index.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { getServers } from '../../../redux/selectors';
import { creationServers, saveActiveItem } from '../../../redux/actions';
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
    dispatch(creationServers());
  }, []);

  function onClickServer(a) {
    return () => {
      dispatch(saveActiveItem(a.id));
    };
  }
  function onClickMenuItem(a) {
    return () => {
      dispatch(saveActiveItem(a));
    };
  }
  function onClickPrivateMessages(a) {
    return () => {
      navigate('dashboard/friends/online');
      dispatch(saveActiveItem(a));
    };
  }

  return (
    <div className={styles.wrapperContent}>
      <Sidebar>
        <SidebarItem
          name={'Private messages'}
          icon={<LogoIcon style={{ height: '20px', width: '26px' }} />}
          onClick={onClickPrivateMessages('Private messages')}
          active={location.pathname === '/dashboard/friends/online'}
        />
        <div className={styles.separator}></div>
        {serversData.servers.servers.map((a) => {
          return (
            <SidebarItem
              key={a.id}
              name={a.name}
              photo={a.photo}
              onClick={onClickServer(a)}
              active={a.id === serversData.servers.activeServer}
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
          onClick={onClickMenuItem('Explore')}
          active={'Explore' === serversData.servers.activeServer}
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
