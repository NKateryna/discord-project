import styles from './index.module.css';
import { useState } from 'react';
import { AttachIcon, SendGifIcon, SendStickerIcon } from '../icons';
import { InputBase } from '@mui/material';

function MessageTextArea({ targetName }) {
  const [messageValue, setMessageValue] = useState('');

  const searchValueChange = (event) => {
    setMessageValue(event.target.value);
  };

  return (
    <div className={styles.box}>
      <div className={styles.buttonAttach}>{<AttachIcon />}</div>
      <InputBase
        value={messageValue}
        onChange={searchValueChange}
        placeholder={targetName ? `Message ${targetName}` : 'Enter Message'}
        className={styles.textareaMessage}
        name="MessageTextArea"
        type={'text'}
        disableUnderline={true}
        multiline={true}
        minRows={1}
      />
      <div className={styles.buttonSend} onClick={null}>
        <SendGifIcon />
      </div>
      <div className={styles.buttonSend} onClick={null}>
        <SendStickerIcon />
      </div>
    </div>
  );
}

export default MessageTextArea;
