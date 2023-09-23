import styles from './index.module.css';
import LabelNew from '../LabelNew';

function PlanCardListItem({ perkItemIcon, text, newPerk = false }) {
  return (
    <li className={styles.planCard__perkItem}>
      <div className={styles.planCard__perkItemIcon}>{perkItemIcon}</div>
      <div className={styles.planCard__text}>{text}</div>
      {newPerk ? <LabelNew color={'white'} /> : null}
    </li>
  );
}

export default PlanCardListItem;
