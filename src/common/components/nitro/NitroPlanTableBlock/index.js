import styles from './index.module.css';
import NitroPlanTable from '../NitroPlanTable';
import { NitroBcgImg1, NitroBcgImg2 } from '../../icons/nitro-page';

export function NitroPlanTableBlock() {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        {'Pick the plan that works best for you'}
      </div>
      <div className={styles.table}>
        <NitroPlanTable />
        <div className={styles.leftDecoration}>
          <NitroBcgImg1 />
        </div>
        <div className={styles.rightDecoration}>
          <NitroBcgImg2 />
        </div>
      </div>
    </div>
  );
}
