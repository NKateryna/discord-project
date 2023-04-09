import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { MicrophoneIcon, MicrophoneOffIcon } from '../icons';
import personalInfo from '../../../redux/personal-info';

function Microphone() {
  const [microphoneOn, setMicrophoneOn] = useState(true);

  useEffect(() => {
    setMicrophoneOn(personalInfo.microphone);
  }, []);
  const onClickMicrophone = () => {
    setMicrophoneOn(!microphoneOn);
  };

  return (
    <div onClick={onClickMicrophone} className={styles.icon}>
      {microphoneOn ? <MicrophoneIcon /> : <MicrophoneOffIcon />}
    </div>
  );
}

export default Microphone;
