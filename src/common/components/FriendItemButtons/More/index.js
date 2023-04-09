import styles from './index.module.css';
import { MoreIcon } from '../../icons';

export function More() {
  const onClickMore = () => {};

  return (
    <div className={styles.background} onClick={onClickMore}>
      <div className={styles.icon}>
        <MoreIcon />
      </div>
    </div>
  );
}

export default More;
