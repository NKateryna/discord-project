import styles from './index.module.css';
import Tooltip from '../../Tooltip';
import { MessageIcon } from '../../icons';

export function Message() {
  const popperProps = {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 3],
        },
      },
    ],
  };

  const onClickMessage = () => {};

  return (
    <div className={styles.background} onClick={onClickMessage}>
      <Tooltip title="Message" placement="top" popperProps={popperProps}>
        <div className={styles.icon}>
          <MessageIcon />
        </div>
      </Tooltip>
    </div>
  );
}

export default Message;
