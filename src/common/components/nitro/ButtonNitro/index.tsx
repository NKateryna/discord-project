import styles from './index.module.css';
import classNames from 'classnames';
import Button from '@mui/base/Button';
import { JSXElement, OnClickButton } from '../../../../types';

interface Props {
  onClick?: OnClickButton;
  icon?: JSXElement;
  text: string;
  color: 'white' | 'transparent';
}

function ButtonNitro({ onClick, icon, text, color }: Props) {
  return (
    <Button
      onClick={onClick}
      className={classNames(styles.button, {
        [styles.button_white]: color === 'white',
        [styles.button_transparent]: color === 'transparent',
      })}
    >
      {icon && (
        <div
          className={classNames(styles.icon, {
            [styles.icon_white]: color === 'white',
            [styles.icon_transparent]: color === 'transparent',
          })}
        >
          {icon}
        </div>
      )}
      {text}
    </Button>
  );
}

export default ButtonNitro;
