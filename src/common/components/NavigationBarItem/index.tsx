import styles from './index.module.css';
import classNames from 'classnames';
import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  onClickItem?: MouseEventHandler<HTMLDivElement>;
  active: boolean
  name: string;
  color?: 'brandColor'
}

function NavigationBarItem({
  icon,
  onClickItem,
  active,
  name,
  color,
}: Props) {
  return (
    <div
      onClick={onClickItem}
      className={classNames(
        styles.box,
        { [styles.boxIcon]: icon },
        { [styles.itemActive]: active },
        { [styles.boxBrandColor]: color === 'brandColor' }
      )}
    >
  <div className={styles.icon}>{icon}</div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}

export default NavigationBarItem;
