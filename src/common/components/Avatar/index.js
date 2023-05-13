import styles from './index.module.css';
import { useState } from 'react';
import { LogoIcon } from '../icons';
import CreateStatus from '../CreateStatus';

function Avatar({ avatar, name, status, statusBcgColor }) {
  const [fallbackAvatar, setFallbackAvatar] = useState(false);
  const statusIcon = CreateStatus(status);

  const styleLogo = {
    width: '20px',
    height: '20px',
    fill: 'var(--white-2)',
  };
  const statusIconPropsStyle = {
    backgroundColor: statusBcgColor,
  };

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
      <div className={styles.statusIcon} style={statusIconPropsStyle}>
        {statusIcon}
      </div>
    </div>
  );
}

export default Avatar;
