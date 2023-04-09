import styles from './index.module.css';
import { MessageIcon } from '../../icons';

export function Message() {
  const onClickMessage = () => {};

  return (
    <div className={styles.background} onClick={onClickMessage}>
      <div className={styles.icon}>
        <MessageIcon />
      </div>
    </div>
  );
}

export default Message;
