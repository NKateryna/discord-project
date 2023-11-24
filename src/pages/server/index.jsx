import styles from './index.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServers } from '../../redux/servers/selectors';
import { InputBase, InputAdornment } from '@mui/material';
import UserPanel from '../../common/components/UserPanel';
import Tooltip from '../../common/components/Tooltip';
import MessageTextArea from '../../common/components/MessageTextArea';
import { saveActiveItem } from '../../redux/servers/actions';
import {
  ChannelIconHashtag,
  HelpIcon,
  MailIcon,
  NotificationSettingsIcon,
  PinnedMessagesIcon,
  SearchIcon,
  ShowMemberListIcon,
  ThreadsIcon,
} from '../../common/components/icons';
import NavigationBarItemServer from '../../common/components/NavigationBarItemServer';

function Server() {
  const serversData = useSelector(getServers);
  const dispatch = useDispatch();
  const { serverId } = useParams();

  useEffect(() => {
    dispatch(saveActiveItem(serverId));
    // eslint-disable-next-line
  }, [serverId]);

  const currentServerData = serversData.servers.find(
    (server) => server._id === serversData.activeServer
  );
  const serverName = currentServerData?.name;

  const [currentChannelName, setCurrentChannelName] = useState('general');
  const [currentChannelIcon, setCurrentChannelIcon] = useState(
    <ChannelIconHashtag />
  );
  const onClickItemServer = (channelName, channelIcon) => {
    return () => {
      setCurrentChannelName(channelName);
      setCurrentChannelIcon(channelIcon);
    };
  };

  const [searchValue, setSearchValue] = useState('');
  const searchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigationBar}>
        <div className={styles.serverName}>{serverName}</div>
        <div className={styles.navigation}>
          <NavigationBarItemServer
            icon={<ChannelIconHashtag />}
            name={'general'}
            onClick={onClickItemServer('general', <ChannelIconHashtag />)}
            active={true}
          />
        </div>
        <UserPanel />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.channelIcon}>{currentChannelIcon}</div>
          <div className={styles.channelName}>{currentChannelName}</div>
          <div className={styles.header_icons}>
            <Tooltip title="Threads" placement="bottom">
              <ThreadsIcon className={styles.header_icon} />
            </Tooltip>
            <Tooltip title="Notification Settings" placement="bottom">
              <NotificationSettingsIcon className={styles.header_icon} />
            </Tooltip>
            <Tooltip title="Pinned Messages" placement="bottom">
              <PinnedMessagesIcon className={styles.header_icon} />
            </Tooltip>
            <Tooltip title="Show Member List" placement="bottom">
              <ShowMemberListIcon className={styles.header_icon} />
            </Tooltip>
            <InputBase
              value={searchValue}
              onChange={searchValueChange}
              placeholder={'Search'}
              className={styles.inputSearch}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon className={styles.searchIcon} />
                </InputAdornment>
              }
              name="Search"
              type={'search'}
              disableUnderline={true}
            />
            <Tooltip title="Inbox" placement="bottom">
              <MailIcon className={styles.header_icon} />
            </Tooltip>
            <Tooltip title="Help" placement="bottom">
              <HelpIcon
                className={styles.header_icon}
                link="https://support.discord.com/"
              />
            </Tooltip>
          </div>
        </div>
        <div className={styles.messagesBox}></div>
        <div className={styles.textAreaBox}>
          <MessageTextArea targetName={currentChannelName} />
        </div>
      </div>
    </div>
  );
}

export default Server;
