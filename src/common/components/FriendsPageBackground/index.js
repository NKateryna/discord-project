import styles from './index.module.css';

function FriendsPageBackground({
  children,
  title,
  helpText,
  searchBox,
  friendsCounter,
}) {
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        {title ? (
          <div className={styles.titleBox}>
            <div className={styles.title}>{title}</div>
            <div className={styles.helpText}>{helpText}</div>
          </div>
        ) : null}
        <div className={styles.searchBox}>{searchBox}</div>
        {friendsCounter ? (
          <div className={styles.friendsCounter}>{friendsCounter}</div>
        ) : null}
      </div>
      <div className={styles.friendsList}>{children}</div>
    </div>
  );
}

export default FriendsPageBackground;
