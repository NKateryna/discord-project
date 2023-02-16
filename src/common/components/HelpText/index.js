import styles from './index.module.css';

function HelpText({ children }) {
  return <div className={styles.text}>{children}</div>;
}

export default HelpText;
