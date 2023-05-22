import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { HeadphonesIcon, HeadphonesOffIcon } from '../icons';

function Headphones(headphonesStatus) {
  const [headphonesOn, setheadphonesOn] = useState(true);

  useEffect(() => {
    setheadphonesOn(headphonesStatus);
  }, [headphonesStatus]);

  const onClickHeadphones = () => {
    setheadphonesOn(!headphonesOn);
  };

  return (
    <div onClick={onClickHeadphones} className={styles.icon}>
      {headphonesOn ? <HeadphonesIcon /> : <HeadphonesOffIcon />}
    </div>
  );
}

export default Headphones;
