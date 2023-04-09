import styles from './index.module.css';

function FriendsPagesSidbar({ title, children }) {
  return (
    <div className={styles.friendsSidbar}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  );
}

export default FriendsPagesSidbar;
