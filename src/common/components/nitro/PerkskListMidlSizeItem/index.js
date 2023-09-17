import styles from './index.module.css';

function PerkskListMidlSizeItem({ title, icon }) {
  return (
    <div className={styles.midlSizeItem}>
      <div className={styles.midlSizeItem__title}>{title}</div>
      <div className={styles.midlSizeItem__icon}>{icon}</div>
    </div>
  );
}

export default PerkskListMidlSizeItem;
