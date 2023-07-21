import styles from './index.module.css';
import { useState } from 'react';
import Avatar from '../Avatar';
import { useDispatch } from 'react-redux';
import { savingActiveItem } from '../../../redux/friends/actions';

function FriendItem({
  onClick,
  activeItem,
  avatar,
  status,
  username,
  hash,
  buttons,
  text,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const statusIconPropsStyle = isHovered ? 'var(--gray-12)' : 'var(--gray-2)';
  const dispatch = useDispatch();

  const friendItemEnter = () => {
    setIsHovered(true);
    dispatch(savingActiveItem(activeItem));
  };
  const friendItemLeave = () => {
    setIsHovered(false);
    dispatch(savingActiveItem(''));
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
      <div className={styles.buttonsBlock}>
        {buttons ? [...buttons].map((el, i) => <div key={i}>{el}</div>) : null}
      </div>
    </div>
  );
}

export default FriendItem;
