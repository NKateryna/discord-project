import styles from './index.module.css';
import LabelNew from '../LabelNew';
import { JSXElement } from '../../../../types';

interface Props {
  icon: JSXElement;
  title: string;
  subtitle: string | JSXElement;
  newPerk?: boolean;
  beta?: boolean;
}

function PerkskListSmallSizeItem({
  icon,
  title,
  subtitle,
  newPerk = false,
  beta = false,
}: Props) {
  return (
    <div className={styles.smallSizeItem}>
      <div className={styles.smallSizeItem__LabelNew}>
        {newPerk && <LabelNew color={'purple'} />}
      </div>

      <div className={styles.smallSizeItem__icon}>{icon}</div>
      <div>
        <div className={styles.smallSizeItem__title}>
          {title}
          {beta && <div className={styles.smallSizeItem__beta}>BETA</div>}
        </div>
        <div className={styles.smallSizeItem__subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

export default PerkskListSmallSizeItem;
