import { JSXElement } from '../../../../types';
import styles from './index.module.css';

interface PropsPerkskListMidlSizeItem {
  title: JSXElement;
  icon: JSXElement;
}

function PerkskListMidlSizeItem({ title, icon }: PropsPerkskListMidlSizeItem) {
  return (
    <div className={styles.midlSizeItem}>
      <div className={styles.midlSizeItem__title}>{title}</div>
      <div>{icon}</div>
    </div>
  );
}

export default PerkskListMidlSizeItem;
