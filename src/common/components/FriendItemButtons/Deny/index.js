import styles from './index.module.css';
import { DenyIcon } from '../../icons';

export function Deny() {
  const onClickDeny = () => {};

  return (
    <div className={styles.background} onClick={onClickDeny}>
      <div className={styles.icon}>
        <DenyIcon />
      </div>
    </div>
  );
}

export default Deny;
