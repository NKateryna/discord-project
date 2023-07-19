import { Button } from '@mui/base';
import styles from './index.module.css';
import classNames from 'classnames';

function ModalAlert({
  titleFirstPart,
  titleSecondPart,
  subtitleFirstPart,
  subtitleSecondPart,
  friendName,
  onClickCancel,
  onClickConfirm,
  confirmingButtonText,
}) {
  return (
    <div className={styles.block}>
      <div className={styles.titleBox}>
        <div className={styles.title}>
          {friendName ? `${titleFirstPart}${friendName}` : titleFirstPart}
          {titleSecondPart}
        </div>
        <div className={styles.subtitle}>
          {subtitleFirstPart}
          <span className={styles.friendName}>{friendName}</span>
          {subtitleSecondPart}
        </div>
      </div>
      <div className={styles.buttonsBox}>
        <Button
          onClick={onClickCancel}
          className={classNames(styles.button, styles.buttonCancel)}
        >
          Cancel
        </Button>
        <Button
          onClick={onClickConfirm}
          className={classNames(styles.button, styles.buttonConfirm)}
        >
          {confirmingButtonText}
        </Button>
      </div>
    </div>
  );
}

export default ModalAlert;
