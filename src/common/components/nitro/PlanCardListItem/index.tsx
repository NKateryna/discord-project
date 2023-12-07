import styles from './index.module.css';
import LabelNew from '../LabelNew';
import { JSXElement } from '../../../../types';

interface PropsPlanCardListItem {
  perkItemIcon: JSXElement;
  text: string;
  newPerk?: boolean;
}

function PlanCardListItem({
  perkItemIcon,
  text,
  newPerk = false,
}: PropsPlanCardListItem) {
  return (
    <li className={styles.planCard__perkItem}>
      <div className={styles.planCard__perkItemIcon}>{perkItemIcon}</div>
      <div className={styles.planCard__text}>{text}</div>
      {newPerk && <LabelNew color={'white'} />}
    </li>
  );
}

export default PlanCardListItem;
