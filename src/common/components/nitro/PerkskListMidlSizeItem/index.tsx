import { JSXElement } from '../../../../types';
import styles from './index.module.css';

interface Props {
  title: JSXElement;
  icon: JSXElement;
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
