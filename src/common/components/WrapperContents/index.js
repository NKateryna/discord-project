import styles from './index.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  return (
    <div className={styles.wrapperContent}>
      <Sidebar>
        <SidebarItem
          name={'Private messages'}
          icon={<LogoIcon style={{ height: '20px', width: '26px' }} />}
          onClick={onClickMenuItem('Private messages')}
          active={'Private messages' === serversData.servers.activeServer}
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
