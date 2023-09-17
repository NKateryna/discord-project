import styles from './index.module.css';
import classNames from 'classnames';
import Button from '@mui/base/Button';

function ButtonNitro({ onClick, icon, text, color }) {
  return (
    <Button
      onClick={onClick}
      className={classNames(styles.button, {
        [styles.button_white]: color === 'white',
        [styles.button_transparent]: color === 'transparent',
      })}
    >
      {icon ? (
        <div
          className={classNames(styles.icon, {
            [styles.icon_white]: color === 'white',
            [styles.icon_transparent]: color === 'transparent',
          })}
        >
          {icon}
        </div>
      ) : null}
      {text}
    </Button>
  );
}

export default ButtonNitro;
