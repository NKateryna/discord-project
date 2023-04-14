import styles from './index.module.css';
import Tooltip from '../../Tooltip';
import { UnblockUserIcon } from '../../icons';

export function UnblockUser() {
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

  const onClickUnblockUser = () => {};

  return (
    <div className={styles.background} onClick={onClickUnblockUser}>
      <Tooltip title="Unblock" placement="top" popperProps={popperProps}>
        <div className={styles.icon}>
          <UnblockUserIcon />
        </div>
      </Tooltip>
    </div>
  );
}

export default UnblockUser;
