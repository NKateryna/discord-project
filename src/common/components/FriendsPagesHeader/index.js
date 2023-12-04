import styles from './index.module.css';
import { FriendsIcon, NewGroupChatIcon, MailIcon, HelpIcon } from '../icons';
import Tooltip from '../Tooltip';
import FriendsPagesTabs from '../FriendsPagesTabs';
import { HELP_URL } from '../../../constants';

function FriendsPagesHeader() {
  return (
    <div className={styles.headerBlock}>
      <div className={styles.friendSwitcher}>
        <FriendsIcon />
        <div className={styles.title}>Friends</div>
        <div className={styles.separator}></div>
        <FriendsPagesTabs />
      </div>
      <div className={styles.icons}>
        <Tooltip title="New Group DM" placement="bottom">
          <NewGroupChatIcon className={styles.icon} />
        </Tooltip>
        <div className={styles.separator}></div>
        <Tooltip title="Inbox" placement="bottom">
          <MailIcon className={styles.icon} />
        </Tooltip>
        <Tooltip title="Help" placement="bottom">
          <HelpIcon className={styles.icon} link={HELP_URL} />
        </Tooltip>
      </div>
    </div>
  );
}

export default FriendsPagesHeader;
