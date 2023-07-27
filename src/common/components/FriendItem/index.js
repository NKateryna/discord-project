import styles from './index.module.css';
import { useState } from 'react';
import Avatar from '../Avatar';

function FriendItem({
  onClick,
  avatar,
  status,
  username,
  hash,
  buttons,
  text,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const statusIconPropsStyle = isHovered ? 'var(--gray-12)' : 'var(--gray-2)';

  const friendItemEnter = () => {
    setIsHovered(true);
  };
  const friendItemLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.friendItem}
      onClick={onClick}
      onMouseEnter={friendItemEnter}
      onMouseLeave={friendItemLeave}
    >
      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          <Avatar
            avatar={avatar}
            status={status}
            name={username}
            statusBcgColor={statusIconPropsStyle}
          />
        </div>
        <div className={styles.nameBlock}>
          <div className={styles.name}>{username}</div>
          <div className={styles.hash}>#{hash}</div>
        </div>
        <div className={styles.statusText}>{text || status}</div>
      </div>
      <div className={styles.buttonsBlock}>{buttons}</div>
    </div>
  );
}

export default FriendItem;
