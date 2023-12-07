import styles from './index.module.css';
import classNames from 'classnames';
import { NitroStar2 } from '../../icons/nitro-page';

interface PropsLabelNew {
  color: 'white' | 'purple';
}

function LabelNew({ color }: PropsLabelNew) {
  return (
    <div className={styles.labelBox}>
      <div
        className={classNames(styles.labelBox, {
          [styles.labelBox_whiteLabel]: color === 'white',
          [styles.labelBox_purpleLabel]: color === 'purple',
        })}
      >
        {'NEW'}
      </div>
      <NitroStar2
        className={classNames(styles.stars, styles.star1, {
          [styles.star1_whiteLabel]: color === 'white',
          [styles.star1_purpleLabe]: color === 'purple',
        })}
      />
      <NitroStar2
        className={classNames(styles.stars, styles.star2, {
          [styles.star2_whiteLabel]: color === 'white',
          [styles.star2_purpleLabe]: color === 'purple',
        })}
      />
      <NitroStar2
        className={classNames(styles.stars, styles.star3, {
          [styles.star3_whiteLabel]: color === 'white',
          [styles.star3_purpleLabe]: color === 'purple',
        })}
      />
    </div>
  );
}

export default LabelNew;
