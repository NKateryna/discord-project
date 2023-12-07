import styles from './index.module.css';
import { ReactElement } from 'react';
import LabelNew from '../LabelNew';

interface Props {
  perkItemIcon: ReactElement;
  text: string;
  newPerk?: boolean;
}

function PlanCardListItem({ perkItemIcon, text, newPerk = false }: Props) {
  return (
    <li className={styles.planCard__perkItem}>
      <div className={styles.planCard__perkItemIcon}>{perkItemIcon}</div>
      <div className={styles.planCard__text}>{text}</div>
      {newPerk && <LabelNew color={'white'} />}
    </li>
  );
}

export default PlanCardListItem;
