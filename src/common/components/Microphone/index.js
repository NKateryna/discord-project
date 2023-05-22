import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { MicrophoneIcon, MicrophoneOffIcon } from '../icons';

function Microphone(microphoneStatus) {
  const [microphoneOn, setMicrophoneOn] = useState(true);

  useEffect(() => {
    setMicrophoneOn(microphoneStatus);
  }, [microphoneStatus]);

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
