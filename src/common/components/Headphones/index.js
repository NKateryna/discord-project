import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { HeadphonesIcon, HeadphonesOffIcon } from '../icons';
import personalInfo from '../../../redux/personal-info';

function Headphones() {
  const [headphonesOn, setheadphonesOn] = useState(true);

  useEffect(() => {
    setheadphonesOn(personalInfo.headphones);
  }, []);

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
