import styles from './index.module.css';
import { ReactElement } from 'react';

interface Props {
  title: ReactElement;
  icon: ReactElement;
}

function PerkskListMidlSizeItem({ title, icon }: Props) {
  return (
    <div className={styles.midlSizeItem}>
      <div className={styles.midlSizeItem__title}>{title}</div>
      <div>{icon}</div>
    </div>
  );
}

export default PerkskListMidlSizeItem;
