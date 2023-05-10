import styles from './index.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { getServers } from '../../../redux/selectors';
import {
  fetchServerListWithRouting,
  saveActiveItem,
} from '../../../redux/actions';
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
    dispatch(fetchServerListWithRouting(navigate, cookies));
  }, [dispatch, navigate]);

  function onClickServer(a) {
    return () => {
      navigate(`channels/ + ${a._id}`);
      dispatch(saveActiveItem(a._id));
    };
  }
  function onClickMenuItem(a) {
    return () => {
      dispatch(saveActiveItem(a));
    };
  }
  function onClickPrivateMessages(a) {
    return () => {
      navigate('channels/');
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
          active={
            location.pathname.startsWith('/channels/@me') ||
            location.pathname === '/nitro'
          }
        />
        <div className={styles.separator}></div>
        {serversData.servers.servers.map((a) => {
          return (
            <SidebarItem
              key={a._id}
              name={a.name}
              photo={a.photo}
              onClick={onClickServer(a)}
              active={a._id === serversData.servers.activeServer}
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
