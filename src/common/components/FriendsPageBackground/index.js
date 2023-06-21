import styles from './index.module.css';
import classNames from 'classnames';

function FriendsPageBackground({
  children,
  title,
  helpText,
  searchBox,
  friendsCounter,
  addFriendPage,
}) {
  return (
    <div className={styles.background}>
      <div
        className={classNames(styles.header, {
          [styles.headerLine]: addFriendPage,
        })}
      >
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
      {addFriendPage ? (
        <div className={styles.friendsEmptyBox}>{children}</div>
      ) : (
        <div className={styles.friendsList}>{children}</div>
      )}
    </div>
  );
}

export default FriendsPageBackground;
