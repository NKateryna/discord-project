import styles from './index.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import { LogoIcon } from '../icons';
import CreateStatus from '../CreateStatus';

function Avatar({ avatar, name, status, statusBcgColor, bigAvatar = false }) {
  const [fallbackAvatar, setFallbackAvatar] = useState(false);

  const styleLogo = {
    default: { width: '20px', height: '20px', fill: 'var(--white-2)' },
    bigLogo: { width: '50px', height: '50px', fill: 'var(--white-2)' },
  };
  const statusIconPropsStyle = {
    backgroundColor: statusBcgColor,
  };
  const styleIconHover = {
    fill: statusBcgColor,
  };

  const statusIcon = CreateStatus(status, styleIconHover);

  return (
    <div className={styles.box}>
      <div
        className={classNames(styles.avatarBcg, {
          [styles.avatarBcgBigAvatar]: bigAvatar,
        })}
      >
        {avatar && !fallbackAvatar ? (
          <img
            src={avatar}
            alt={name}
            className={styles.avatar}
            onError={() => setFallbackAvatar(true)}
          />
        ) : (
          <LogoIcon style={bigAvatar ? styleLogo.bigLogo : styleLogo.default} />
        )}
      </div>
      <div
        className={classNames(styles.statusIcon, {
          [styles.statusIconBigAvatar]: bigAvatar,
        })}
        style={statusIconPropsStyle}
      >
        {statusIcon}
      </div>
    </div>
  );
}

export default Avatar;
