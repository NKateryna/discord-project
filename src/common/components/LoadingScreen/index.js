import styles from './index.module.css';
import { LogoIcon } from '../icons';

const styleLogo = {
  width: '70px',
  height: '55px',
  marginBottom: '56px',
};

function LoadingScreen({ title, subtitle }) {
  return (
    <div className={styles.container}>
      <LogoIcon style={styleLogo} />
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
}

export default LoadingScreen;
