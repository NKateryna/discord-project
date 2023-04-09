import styles from './index.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import { LogoIcon } from '../icons';
import Tooltip from '../Tooltip';

function SidebarItem({
  id,
  name,
  photo,
  icon,
  onClick,
  active,
  notifications,
  green,
}) {
  const [fallbackPhoto, setFallbackPhoto] = useState(false);

  const styleLogo = {
    width: '30px',
    height: '30px',
    fill: 'var(--white-2)',
  };

  return (
    <div
      className={classNames(
        styles.box,
        { [styles.itemActive]: active },
        { [styles.itemNotifications]: notifications }
      )}
      key={id}
    >
      <Tooltip title={name} placement="right">
        <div
          onClick={onClick}
          className={classNames(styles.photoBcg, { [styles.green]: green })}
        >
          {icon ? (
            <div className={styles.icon}>{icon}</div>
          ) : photo && !fallbackPhoto ? (
            <img
              src={photo}
              className={styles.photo}
              alt={name}
              onError={() => setFallbackPhoto(true)}
            />
          ) : (
            <LogoIcon style={styleLogo} />
          )}
        </div>
      </Tooltip>
      <div className={styles.pill}></div>
    </div>
  );
}

export default SidebarItem;
