import styles from './index.module.css';
import { AcceptIcon } from '../../icons';

export function Accept() {
  const onClickAccept = () => {};

  return (
    <div className={styles.background} onClick={onClickAccept}>
      <div className={styles.icon}>
        <AcceptIcon />
      </div>
    </div>
  );
}

export default Accept;
