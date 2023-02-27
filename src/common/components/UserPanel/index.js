import styles from './index.module.css';
import { useEffect, useState } from 'react';
import {
  HeadphonesIcon,
  HeadphonesOffIcon,
  MicrophoneIcon,
  MicrophoneOffIcon,
  SettingsIcon,
} from '../icons';
import Avatar from '../Avatar';
import personalInfo from '../../../redux/personal-info';

function UserPanel() {
  const [microphoneOn, setMicrophoneOn] = useState(true);
  const [headphonesOn, setheadphonesOn] = useState(true);

  useEffect(() => {
    setMicrophoneOn(personalInfo.microphone);
    setheadphonesOn(personalInfo.headphones);
  }, []);

  const onClickAccountInfo = () => {};
  const onClickMicrophone = () => {
    setMicrophoneOn(!microphoneOn);
  };
  const onClickHeadphones = () => {
    setheadphonesOn(!headphonesOn);
  };
  const onClickSettings = () => {};

  return (
    <div className={styles.box}>
      <div onClick={onClickAccountInfo} className={styles.accountInfo}>
        <div className={styles.avatar}>
          <Avatar avatar={personalInfo.avatar} status={personalInfo.status} />
        </div>
        <div className={styles.name}>{personalInfo.name}</div>
        <div className={styles.userId}>{null}</div>
      </div>
      <div className={styles.settingsIcons}>
        <div onClick={onClickMicrophone} className={styles.icon}>
          {microphoneOn ? <MicrophoneIcon /> : <MicrophoneOffIcon />}
        </div>
        <div onClick={onClickHeadphones} className={styles.icon}>
          {headphonesOn ? <HeadphonesIcon /> : <HeadphonesOffIcon />}
        </div>
        <div onClick={onClickSettings} className={styles.icon}>
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
