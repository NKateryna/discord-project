import styles from './index.module.css';
import {
  StatusActiveIcon,
  StatusDoNotDisturbIcon,
  StatusInactiveIcon,
  StatusInvisibleIcon,
} from '../icons';

function Avatar({ avatar, status, name }) {
  const createStatus = (status) => {
    switch (status) {
      case 'ONLINE':
        return <StatusActiveIcon />;
      case 'OFFLINE':
        return <StatusInvisibleIcon />;
      case 'AWAY':
        return <StatusInactiveIcon />;
      case 'BUSY':
        return <StatusDoNotDisturbIcon />;
      default:
        return <StatusInvisibleIcon />;
    }
  };

  let statusIcon = createStatus(status);

  return (
    <div className={styles.box}>
      <div className={styles.avatarBcg}>
        {avatar ? (
          <img src={avatar} alt={name} className={styles.avatar} />
        ) : null}
      </div>
      <div className={styles.statusIcon}>{statusIcon}</div>
    </div>
  );
}

export default Avatar;
