import styles from './index.module.css';
import Tooltip from '../../Tooltip';
import { DenyIcon } from '../../icons';

export function Deny() {
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

  const onClickDeny = () => {};

  return (
    <div className={styles.background} onClick={onClickDeny}>
      <Tooltip title="Deny" placement="top" popperProps={popperProps}>
        <div className={styles.icon}>
          <DenyIcon />
        </div>
      </Tooltip>
    </div>
  );
}

export default Deny;
