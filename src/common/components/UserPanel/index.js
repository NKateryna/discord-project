import styles from './index.module.css';
import { useState } from 'react';
import Avatar from '../Avatar';
import Microphone from '../Microphone';
import Headphones from '../Headphones';
import { SettingsIcon } from '../icons';

import personalInfo from '../../../redux/personal-info';

function UserPanel() {
  const [isHovered, setIsHovered] = useState(false);
  const statusIconPropsStyle = isHovered ? 'var(--gray-5)' : 'var(--gray-10)';

  const onClickAccountInfo = () => {};

  const onClickSettings = () => {};

  return (
    <div className={styles.box}>
      <div
        onClick={onClickAccountInfo}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={styles.accountInfo}
      >
        <div className={styles.avatar}>
          <Avatar
            avatar={personalInfo.avatar}
            status={personalInfo.status}
            statusBcgColor={statusIconPropsStyle}
          />
        </div>
        <div className={styles.name}>{personalInfo.name}</div>
        <div className={styles.userId}>{null}</div>
      </div>
      <div className={styles.settingsIcons}>
        <Microphone />
        <Headphones />
        <div onClick={onClickSettings} className={styles.icon}>
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
