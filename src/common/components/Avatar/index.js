import styles from './index.module.css';
import { useState } from 'react';
import { LogoIcon } from '../icons';
import CreateStatus from '../CreateStatus';

function Avatar({ avatar, status, name }) {
  const styleLogo = {
    width: '20px',
    height: '20px',
    fill: 'var(--white-2)',
  };

  const [fallbackAvatar, setFallbackAvatar] = useState(false);
  const statusIcon = CreateStatus(status);

  return (
    <div className={styles.box}>
      <div className={styles.avatarBcg}>
        {avatar && !fallbackAvatar ? (
          <img
            src={avatar}
            alt={name}
            className={styles.avatar}
            onError={() => setFallbackAvatar(true)}
          />
        ) : (
          <LogoIcon style={styleLogo} />
        )}
      </div>
      <div className={styles.statusIcon}>{statusIcon}</div>
    </div>
  );
}

export default Avatar;
