import styles from './index.module.css';
import { useEffect, useState } from 'react';
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
import { Backdrop, Modal } from '@mui/material';
import ModalCreateServer from '../create-server/ModalCreateServer';
import ModalCustomizeServer from '../create-server/ModalCustomizeServer';
import LoadingScreen from '../LoadingScreen';

function WrapperContents({ children }) {
  const serversData = useSelector(getServers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoaded } = serversData;

  const [open, setOpen] = useState(false);
  const [openModalCreateServer, setOpenModalCreateServer] = useState(false);
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    const cookies = new Cookies();
    dispatch(fetchUserData(navigate, cookies));
    // eslint-disable-next-line
  }, []);

  const onClickServer = (server) => {
    return () => {
      navigate(`channels/${server._id}`);
      dispatch(saveActiveItem(server._id));
    };
  };

  const onClickAddServer = () => {
    setModalType('ModalCreateServer');
    setOpenModalCreateServer(true);
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpenModalCreateServer(false);
    setModalType('');
  };

  const onClickCreateMyOwn = () => {
    setModalType('ModalCustomizeServer');
  };

  const onClickBack = () => {
    setModalType('ModalCreateServer');
  };

  const onClickMenuItem = (menuItemName) => {
    return () => {
      navigate(`${menuItemName}`);
      dispatch(saveActiveItem(menuItemName));
    };
  };

  const onClickDirectMessages = (directMessages) => {
    return () => {
      navigate('channels/@me');
      dispatch(saveActiveItem(directMessages));
    };
  };

  if (!isLoaded) {
    return (
      <LoadingScreen
        title={'DID YOU KNOW'}
        subtitle={'We’re glad you’re back!'}
      />
    );
  }

  return (
    <div className={styles.wrapperContent}>
      <Backdrop open={open} onClick={() => setOpen(false)} invisible />
      <Sidebar>
        <SidebarItem
          name={'Direct messages'}
          icon={<LogoIcon style={{ height: '20px', width: '26px' }} />}
          onClick={onClickDirectMessages('Direct messages')}
          active={
            location.pathname.startsWith('/channels/@me') ||
            location.pathname === '/nitro'
          }
        />
        <div className={styles.separator}></div>
        {serversData.servers.map((server) => {
          return (
            <SidebarItem
              id={server._id}
              name={server.name}
              photo={server.photo}
              onClick={onClickServer(server)}
              active={server._id === serversData.activeServer}
              key={server._id}
            />
          );
        })}
        <SidebarItem
          green={true}
          name={'Add server'}
          icon={<AddChannelIcon />}
          onClick={onClickAddServer}
        />
        <Modal
          open={openModalCreateServer}
          onClose={handleClose}
          disablePortal={false}
          disableEnforceFocus
          closeAfterTransition
          slotProps={{
            backdrop: {
              sx: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
              },
            },
          }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {modalType === 'ModalCreateServer' ? (
            <ModalCreateServer
              onClickClose={handleClose}
              onClickCreateMyOwn={onClickCreateMyOwn}
              onClickJoinServer={null}
            />
          ) : (
            <ModalCustomizeServer
              onClickClose={handleClose}
              onClickBack={onClickBack}
            />
          )}
        </Modal>
        <SidebarItem
          green={true}
          name={'Explore'}
          icon={<ChannelSearchIcon />}
          onClick={onClickMenuItem('guild-discovery')}
          active={'guild-discovery' === serversData.activeServer}
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
