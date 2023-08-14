import styles from './index.module.css';
import FriendsPagestProvider from '../../../contexts/FriendsPagesContext';
import FriendsPagesHeader from '../FriendsPagesHeader';
import FriendsPagesSwitcher from '../FriendsPagesSwitcher';
import FriendsPagesSidbar from '../FriendsPagesSidbar';

function WrapperFriendsPages() {
  return (
    <FriendsPagestProvider>
      <div className={styles.wrapperFriends}>
        <FriendsPagesHeader />
        <div className={styles.contentFriends}>
          <FriendsPagesSwitcher />
          <FriendsPagesSidbar />
        </div>
      </div>
    </FriendsPagestProvider>
  );
}

export default WrapperFriendsPages;
