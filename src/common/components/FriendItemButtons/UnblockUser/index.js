import styles from './index.module.css';
import { UnblockUserIcon } from '../../icons';

export function UnblockUser() {
  const onClickUnblockUser = () => {};

  return (
    <div className={styles.background} onClick={onClickUnblockUser}>
      <div className={styles.icon}>
        <UnblockUserIcon />
      </div>
    </div>
  );
}

export default UnblockUser;
