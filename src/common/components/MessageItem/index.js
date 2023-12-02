import styles from './index.module.css';
import Avatar from '../Avatar';

function MessageItem({ avatar, name, time, text }) {
  return (
    <div className={styles.box}>
      <div className={styles.avatar}>
        <Avatar avatar={avatar} name={name} size={'40px'} />
      </div>
      <div>
        <div className={styles.messageData}>
          <div className={styles.name}>{name}</div>
          <span className={styles.time}>{time}</span>
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}

export default MessageItem;
