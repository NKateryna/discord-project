import styles from './index.module.css';
import classNames from 'classnames';
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
  return (
    <div
      onClick={onClick}
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
          <Avatar avatar={avatar} status={status} name={name} />
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
