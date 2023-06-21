import styles from './index.module.css';
import { MicrophoneIcon, MicrophoneOffIcon } from '../icons';

function Microphone({ microphoneStatus, onClick }) {
  return (
    <div onClick={onClick} className={styles.icon}>
      {microphoneStatus ? <MicrophoneIcon /> : <MicrophoneOffIcon />}
    </div>
  );
}

export default Microphone;
