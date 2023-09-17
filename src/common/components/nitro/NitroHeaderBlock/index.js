import styles from './index.module.css';
import ButtonNitro from '../ButtonNitro';
import PlanCard from '../PlanCard';
import PlanCardListItem from '../PlanCardListItem';
import {
  NitroBcgGradient,
  NitroPlanBasicNitro,
  NitroPlanIcon1Uploads,
  NitroPlanIcon2CustomEmoji,
  NitroPlanIcon3NitroBadge,
  NitroPlanIcon4SuperReactions,
  NitroPlanIcon5ServerBoosts,
  NitroPlanIcon6CustomProfiles,
  NitroPlanImg1,
  NitroPlanImg2,
  NitroPlanNitro,
  NitroStar,
  NitroTitleNitroGift,
  NitroTitleSubscribe,
} from '../../icons/nitro-page';

export function NitroHeaderBlock() {
  return (
    <div className={styles.box}>
      <NitroBcgGradient />
      <div className={styles.header}>
        <div className={styles.header__title}>
          {'Unleash More Fun with Nitro'}
        </div>
        <div className={styles.header__subtitle}>
          {'Plans start at only $2.99/month. Cancel anytime'}
        </div>
        <div className={styles.header__buttons}>
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
      <div className={styles.plans}>
        <PlanCard
          planName={'BasicNitro'}
          onClick={null}
          planNameIcon={<NitroPlanBasicNitro />}
          img={<NitroPlanImg1 />}
          priceText={'$2.99/month'}
        >
          <PlanCardListItem
            perkItemIcon={<NitroPlanIcon1Uploads />}
            text={'50MB uploads'}
          />
          <PlanCardListItem
            perkItemIcon={<NitroPlanIcon2CustomEmoji />}
            text={'Custom emoji anywhere'}
          />
          <PlanCardListItem
            perkItemIcon={<NitroPlanIcon3NitroBadge />}
            text={'Special Nitro badge on your profile'}
          />
          <PlanCardListItem
            perkItemIcon={<NitroPlanIcon4SuperReactions />}
            text={'2 Super Reactions per week'}
            newPerk={true}
          />
        </PlanCard>
        <PlanCard
          planName={'Nitro'}
          onClick={null}
          planNameIcon={<NitroPlanNitro />}
          img={<NitroPlanImg2 />}
          priceText={'$9.99/month'}
        >
          <PlanCardListItem
            perkItemIcon={<NitroPlanIcon1Uploads />}
            text={'50MB uploads'}
          />
          <PlanCardListItem
            perkItemIcon={<NitroPlanIcon2CustomEmoji />}
            text={'Custom emoji anywhere'}
          />
          <PlanCardListItem
            perkItemIcon={<NitroPlanIcon3NitroBadge />}
            text={'Special Nitro badge on your profile'}
          />
          <PlanCardListItem
            perkItemIcon={<NitroPlanIcon4SuperReactions />}
            text={'2 Super Reactions per week'}
            newPerk={true}
          />
          <PlanCardListItem
            perkItemIcon={<NitroPlanIcon5ServerBoosts />}
            text={'2 Server Boosts'}
          />
          <PlanCardListItem
            perkItemIcon={<NitroPlanIcon6CustomProfiles />}
            text={'Custom profiles and more!'}
          />
        </PlanCard>
      </div>
    </div>
  );
}
