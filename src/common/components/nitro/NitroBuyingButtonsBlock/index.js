import styles from './index.module.css';
import ButtonNitro from '../ButtonNitro';
import {
  NitroBcgImg3,
  NitroStar,
  NitroTitleNitroGift,
  NitroTitleSubscribe,
} from '../../icons/nitro-page';

export function NitroBuyingButtonsBlock() {
  return (
    <div className={styles.block}>
      <div className={styles.box}>
        <div className={styles.title}>{'Unleash the fun with Nitro!'}</div>
        <div className={styles.buttons}>
          <ButtonNitro
            onClick={null}
            icon={<NitroTitleSubscribe />}
            text={'Subscribe'}
            color={'white'}
          />
          <ButtonNitro
            onClick={null}
            icon={<NitroTitleNitroGift />}
            text={'Gift Nitro'}
            color={'transparent'}
          />
        </div>
        <NitroStar className={styles.star1} />
        <NitroStar className={styles.star2} />
        <NitroStar className={styles.star3} />
        <NitroStar className={styles.star4} />
      </div>
      <div className={styles.bottomDecoration}>
        <NitroBcgImg3 />
      </div>
    </div>
  );
}
