import styles from './index.module.css';
import { HeadphonesIcon, HeadphonesOffIcon } from '../icons';

function Headphones({ headphonesStatus, onClick }) {
  return (
    <div onClick={onClick} className={styles.icon}>
      {headphonesStatus ? <HeadphonesIcon /> : <HeadphonesOffIcon />}
    </div>
  );
}

export default Headphones;
