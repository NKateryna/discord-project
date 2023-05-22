import styles from './index.module.css';
import {
  StatusActiveIcon,
  StatusDoNotDisturbIcon,
  StatusInactiveIcon,
  StatusInvisibleIcon,
} from '../icons';

function StatusModal({ closeUserInfoModal }) {
  const onClicStatus = (status) => {
    return () => {
      closeUserInfoModal();
    };
  };

  return (
    <div className={styles.bcg}>
      <div className={styles.statusItem} onClick={onClicStatus('ONLINE')}>
        <div className={styles.statusIcon}>
          <StatusActiveIcon />
        </div>
        <div className={styles.blockText}>
          <div className={styles.statusText}>Online</div>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.statusItem} onClick={onClicStatus('AWAY')}>
        <div className={styles.statusIcon}>
          <StatusInactiveIcon className={styles.iconHover} />
        </div>
        <div className={styles.blockText}>
          <div className={styles.statusText}>Idle</div>
        </div>
      </div>
      <div className={styles.statusItem} onClick={onClicStatus('BUSY')}>
        <div className={styles.statusIcon}>
          <StatusDoNotDisturbIcon />
        </div>
        <div className={styles.blockText}>
          <div className={styles.statusText}>Do Not Disturb</div>
          <div className={styles.helpText}>
            You will not receive any desktop notifications.
          </div>
        </div>
      </div>
      <div className={styles.statusItem} onClick={onClicStatus('OFFLINE')}>
        <div className={styles.statusIcon}>
          <StatusInvisibleIcon className={styles.iconHover} />
        </div>
        <div className={styles.blockText}>
          <div className={styles.statusText}>Invisible</div>
          <div className={styles.helpText}>
            You will not appear online, but will have full access <br /> to all
            of Discord.
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusModal;
