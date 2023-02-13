import styles from './index.module.css';

function Sidebar({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Sidebar;
