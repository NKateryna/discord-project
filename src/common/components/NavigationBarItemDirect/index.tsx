import styles from './index.module.css';
import classNames from 'classnames';
import { MouseEventHandler, useState } from 'react';
import { AvatarProps } from '../../../types';
import { CloseChatIcon } from '../icons';
import Avatar from '../Avatar';
interface Props extends AvatarProps {
  onClickItem:MouseEventHandler<HTMLDivElement>;
  onClickDeleteChat?: MouseEventHandler<HTMLDivElement>;
  active: boolean
  id: string;
}

function NavigationBarItemDirect({
  onClickItem,
  active,
  id,
  onClickDeleteChat,
  avatar,
  name,
  status
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const statusIconPropsStyle = isHovered ? 'var(--gray-5)' : 'var(--gray-1)';
  return (
    <div
      onClick={onClickItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classNames(
        styles.box,
        { [styles.itemActive]: active },
      )}
      key={id}
    >
        <div className={styles.avatar}>
          <Avatar
            avatar={avatar}
            status={status}
            name={name}
            statusBcgColor={statusIconPropsStyle}
          />
        </div>
      <div className={styles.name}>{name}</div>
      <div onClick={onClickDeleteChat} className={styles.closeChat}>
          <CloseChatIcon />
        </div>
    </div>
  );
}

export default NavigationBarItemDirect;
