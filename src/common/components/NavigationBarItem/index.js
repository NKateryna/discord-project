import styles from './index.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import { CloseChatIcon } from '../icons';
import Avatar from '../Avatar';

function NavigationBarItem({
  onClick,
  id,
  icon,
  avatar,
  status,
  name,
  active,
  onClickCloseChat,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const statusIconPropsStyle = isHovered ? 'var(--gray-5)' : 'var(--gray-1)';

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classNames(
        styles.box,
        { [styles.boxIcon]: icon },
        { [styles.itemActive]: active }
      )}
      key={id}
    >
      {icon ? (
        <div className={styles.icon}>{icon}</div>
      ) : (
        <div className={styles.avatar}>
          <Avatar
            avatar={avatar}
            status={status}
            name={name}
            statusBcgColor={statusIconPropsStyle}
          />
        </div>
      )}
      <div className={styles.name}>{name}</div>
      {icon ? null : (
        <div onClick={onClickCloseChat} className={styles.closeChat}>
          <CloseChatIcon />
        </div>
      )}
    </div>
  );
}

export default NavigationBarItem;
