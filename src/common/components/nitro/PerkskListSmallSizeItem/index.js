import styles from './index.module.css';
import LabelNew from '../LabelNew';

function PerkskListSmallSizeItem({
  icon,
  title,
  subtitle,
  newPerk = false,
  beta = false,
}) {
  return (
    <div className={styles.smallSizeItem}>
      <div className={styles.smallSizeItem__LabelNew}>
        {newPerk ? <LabelNew color={'purple'} /> : null}
      </div>

      <div className={styles.smallSizeItem__icon}>{icon}</div>
      <div className={styles.smallSizeItem__text}>
        <div className={styles.smallSizeItem__title}>
          {title}
          {beta ? <div className={styles.smallSizeItem__beta}>BETA</div> : null}
        </div>
        <div className={styles.smallSizeItem__subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

export default PerkskListSmallSizeItem;
