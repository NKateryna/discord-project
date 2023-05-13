import styles from './index.module.css';
import { useState } from 'react';
import Avatar from '../Avatar';

function FriendsPagesSidbarItem({ avatar, status, name, gameTime, gameLogo }) {
  const [fallbackGameLogo, setFallbackGameLogo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const statusIconPropsStyle = isHovered ? 'var(--gray-9)' : 'var(--gray-1)';

  return (
    <div
      className={styles.box}
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
        <div className={styles.gameTime}>{gameTime}</div>
      </div>
      {gameLogo && !fallbackGameLogo ? (
        <img
          className={styles.gameLogo}
          src={gameLogo}
          alt={''}
          onError={() => setFallbackGameLogo(true)}
        />
      ) : null}
    </div>
  );
}

export default FriendsPagesSidbarItem;
