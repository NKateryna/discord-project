import styles from './index.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import { LogoIcon } from '../icons';
import CreateStatus from '../CreateStatus';
import { AvatarProps } from '../../../types';

function Avatar({ avatar, name, status, statusBcgColor, size }: AvatarProps) {
  const [fallbackAvatar, setFallbackAvatar] = useState(false);

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
        className={classNames(styles.bcg, {
          [styles.bcg80px]: size === '80px',
          [styles.bcg40px]: size === '40px',
        })}
      >
        {avatar && !fallbackAvatar ? (
          <img
            src={avatar}
            alt={name}
            className={classNames(styles.avatar, {
              [styles.avatar80px]: size === '80px',
              [styles.avatar40px]: size === '40px',
            })}
            onError={() => setFallbackAvatar(true)}
          />
        ) : (
          <LogoIcon
            className={classNames(styles.logoIcon, {
              [styles.logoIcon80px]: size === '80px',
              [styles.logoIcon40px]: size === '40px',
            })}
          />
        )}
      </div>
      {status && (
        <div
          className={classNames(styles.statusIcon, {
            [styles.statusIcon80px]: size === '80px',
          })}
          style={statusIconPropsStyle}
        >
          {statusIcon}
        </div>
      )}
    </div>
  );
}

export default Avatar;
