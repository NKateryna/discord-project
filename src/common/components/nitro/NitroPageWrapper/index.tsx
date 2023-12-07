import styles from './index.module.css';
import { PropsWithChildren, ReactNode } from 'react';
import { NitroIcon } from '../../icons';

export function NitroPageWrapper({
  children,
}: PropsWithChildren<{ children: ReactNode }>) {
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
