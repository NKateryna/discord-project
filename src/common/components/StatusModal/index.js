import styles from './index.module.css';
import {
  StatusActiveIcon,
  StatusDoNotDisturbIcon,
  StatusInactiveIcon,
  StatusInvisibleIcon,
} from '../icons';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { creationUserInfo } from '../../../redux/userInfo/actions';

function StatusModal({ closeUserInfoModal }) {
  const dispatch = useDispatch();

  const onClicStatus = (status) => {
    return async () => {
      const cookies = new Cookies();
      const token = cookies.get('authToken', { path: '/' });

      try {
        const response = await fetch('http://localhost:80/users/status', {
          method: 'POST',
          body: JSON.stringify({
            status: status,
          }),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        dispatch(creationUserInfo(data));
      } catch (error) {
        console.log(error);
      }

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
