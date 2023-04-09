import styles from './index.module.css';
import { useState } from 'react';
import Avatar from '../Avatar';

function FriendItem({ avatar, status, name, buttons }) {
  const [isHovered, setIsHovered] = useState(false);
  const statusIconPropsStyle = isHovered ? 'var(--gray-12)' : 'var(--gray-2)';

  const onClickfriendItem = () => {};

  return (
    <div
      className={styles.friendItem}
      onClick={onClickfriendItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          <Avatar
            avatar={avatar}
            status={status}
            name={name}
            statusBcgColor={statusIconPropsStyle}
          />
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.status}>{status}</div>
      </div>
      <div className={styles.buttonsBlock}>
        {buttons ? [...buttons].map((el, i) => <div key={i}>{el}</div>) : null}
      </div>
    </div>
  );
}

export default FriendItem;
