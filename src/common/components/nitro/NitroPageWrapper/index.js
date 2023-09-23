import styles from './index.module.css';
import { NitroIcon } from '../../icons';

export function NitroPageWrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerBlock}>
        <div className={styles.icon}>
          <NitroIcon />
        </div>
        <div className={styles.title}>Nitro</div>
      </div>
      <div className={styles.contentNitro}>{children}</div>
    </div>
  );
}
