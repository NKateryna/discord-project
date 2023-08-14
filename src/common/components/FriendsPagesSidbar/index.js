import styles from './index.module.css';

function FriendsPagesSidbar() {
  const activeFriends = null;

  return (
    <div className={styles.friendsSidbar}>
      <div className={styles.friendsSidbar__title}>Active Now</div>
      {!activeFriends ? (
        <div className={styles.emptyStateBox}>
          <div className={styles.emptyStateBox__title}>
            It’s quiet for now...
          </div>
          <div className={styles.emptyStateBox__text}>
            When a friend starts active-now activity - like playing a <br />
            game or hanging out on voice - we’ll show it here!
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default FriendsPagesSidbar;
