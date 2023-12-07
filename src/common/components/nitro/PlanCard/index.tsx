import styles from './index.module.css';
import classNames from 'classnames';
import { ReactElement, ReactNode, MouseEventHandler } from 'react';
import ButtonNitro from '../ButtonNitro';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  planName: PlanName;
  planNameIcon: ReactElement;
  img: ReactElement;
  priceText: string;
  children: ReactNode;
}
type PlanName = 'BasicNitro' | 'Nitro';

function PlanCard({
  onClick,
  planName,
  planNameIcon,
  img,
  priceText,
  children,
}: Props) {
  return (
    <div
      className={classNames(styles.planCard, {
        [styles.planCardBasicNitro]: planName === 'BasicNitro',
        [styles.planCardNitro]: planName === 'Nitro',
      })}
    >
      <div className={styles.planCard__img}>{img}</div>
      <div className={styles.planCard__nameIcon}>{planNameIcon}</div>
      <div className={styles.planCard__price}>{priceText}</div>
      <ul className={styles.planCard__perksList}>{children}</ul>
      <div className={styles.planCard__button}>
        <ButtonNitro onClick={onClick} text={'Subscribe'} color={'white'} />
      </div>
    </div>
  );
}

export default PlanCard;
