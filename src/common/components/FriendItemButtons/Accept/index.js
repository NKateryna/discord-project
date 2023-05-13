import styles from './index.module.css';
import Tooltip from '../../Tooltip';
import { AcceptIcon } from '../../icons';

export function Accept() {
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

  const onClickAccept = () => {};

  return (
    <div className={styles.background} onClick={onClickAccept}>
      <Tooltip title="Accept" placement="top" popperProps={popperProps}>
        <div className={styles.icon}>
          <AcceptIcon />
        </div>
      </Tooltip>
    </div>
  );
}

export default Accept;
