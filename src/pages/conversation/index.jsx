import styles from './index.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { InputBase, InputAdornment } from '@mui/material';
import Tooltip from '../../common/components/Tooltip';
import MessageTextArea from '../../common/components/MessageTextArea';
import {
  At,
  HelpIcon,
  MailIcon,
  PinnedMessagesIcon,
  SearchIcon,
  UserProfileIcon,
} from '../../common/components/icons';
import CreateStatus from '../../common/components/CreateStatus';
import classNames from 'classnames';
import Avatar from '../../common/components/Avatar';
import { getConversations } from '../../redux/conversations/selectors';

function Сonversation() {
  const navigate = useNavigate();
  const conversationsData = useSelector(getConversations);
  const { conversationId } = useParams();
  const [memberDate, setMemberDate] = useState(null);

  const statusIconPropsStyle = 'var(--gray-10)';
  const [friendProfile, setFriendProfile] = useState(true);
  const onClickFriendProfileIcon = () => {
    setFriendProfile(!friendProfile);
  };

  const currentConversationData = conversationsData.data.find(
    (conversation) => conversation._id === conversationId
  );

  useEffect(() => {
    if (
      (conversationsData.toggleLoading && !currentConversationData) ||
      !currentConversationData
    ) {
      navigate(`/channels/@me/`);
    }
    // eslint-disable-next-line
  }, [conversationsData, currentConversationData]);

  const createdAt = '2020-04-10T14:22:50.488Z';
  const statusIcon = CreateStatus(currentConversationData?.sender.status);
  useEffect(() => {
    const dateRegistration = new Date(createdAt);
    const optionsDate = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    setMemberDate(dateRegistration.toLocaleString('en-US', optionsDate));
  }, [createdAt]);

  const [searchValue, setSearchValue] = useState('');
  const searchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <div className={styles.icon_at}>{<At />}</div>
          <div className={styles.header_friendInfo}>
            <div className={styles.header_friendName}>
              {currentConversationData?.sender?.username}
            </div>
            <div className={styles.header_friendStatus}>{statusIcon}</div>
          </div>
          <div className={styles.header_icons}>
            <Tooltip title="Pinned Messages" placement="bottom">
              <PinnedMessagesIcon className={styles.header_icon} />
            </Tooltip>
            <Tooltip
              title={friendProfile ? 'Hide User Profile' : 'Show User Profile'}
              placement="bottom"
            >
              <UserProfileIcon
                onClick={onClickFriendProfileIcon}
                className={classNames(styles.header_icon, {
                  [styles.header_icon__active]: friendProfile,
                })}
              />
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
        <div className={styles.content}>
          <div className={styles.conversation}>
            <div className={styles.messagesBox}></div>
            <div className={styles.textAreaBox}>
              <MessageTextArea
                targetName={currentConversationData?.sender.username}
              />
            </div>
          </div>
          {friendProfile ? (
            <div className={styles.friendProfile}>
              <div className={styles.friendProfile_bcg}>
                <div className={styles.friendProfile_avatar}>
                  <Avatar
                    avatar={currentConversationData?.sender.avatar}
                    status={currentConversationData?.sender.status}
                    statusBcgColor={statusIconPropsStyle}
                    size={'80px'}
                  />
                </div>
              </div>
              <div className={styles.friendInfo}>
                <div className={styles.friendInfo_info_text}>
                  {currentConversationData?.sender?.username}
                  <span
                    className={styles.friendInfo_hash}
                  >{`#${currentConversationData?.sender.hash
                    .toString()
                    .padStart(4, '0')}`}</span>
                </div>
                <div className={styles.friendInfo_member}>
                  DISCORD MEMBER SINCE
                </div>
                <div className={styles.friendInfo_memberDate}>{memberDate}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Сonversation;
