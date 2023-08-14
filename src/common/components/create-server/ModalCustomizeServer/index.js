import styles from './index.module.css';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { creatingNewServer } from '../../../../redux/servers/actions';
import { Button, Input } from '@mui/base';
import { CloseIcon } from '../../icons';

function ModalCustomizeServer({ onClickClose, onClickBack }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const [serverNameValue, setServerNameValue] = useState('');

  const serverNameValueChange = (event) => {
    setServerNameValue(event.target.value);
  };

  const onClickCreate = async () => {
    if (serverNameValue) {
      const resultCreatingServer = await dispatch(
        creatingNewServer(navigate, cookies, serverNameValue)
      );
      if (resultCreatingServer) {
        setServerNameValue('');
        onClickClose();
      }
    }
  };

  return (
    <div className={styles.block}>
      <div className={styles.boxCustomize}>
        <Button onClick={onClickClose} className={styles.buttonClose}>
          <CloseIcon />
        </Button>
        <div className={styles.title}>Customize your server</div>
        <div className={styles.subtitle}>
          Give your new server a personality with a name.You can always change
          it later.
        </div>
        <div className={styles.boxServerName}>
          <div className={styles.boxServerName__lable}>SERVER NAME</div>
          <Input
            value={serverNameValue}
            onChange={serverNameValueChange}
            id={'creatingNewServer'}
            slotProps={{ input: { className: styles.boxServerName__input } }}
          />
          <div className={styles.boxServerName__warning}>
            By creating a server, you agree to Discord’s{' '}
            <a
              className={styles.boxServerName__warningLink}
              href="https://discord.com/guidelines"
            >
              Community Guidelines
            </a>
          </div>
        </div>
      </div>
      <div className={styles.boxButtons}>
        <Button onClick={onClickBack} className={styles.boxButtons__buttonBack}>
          Back
        </Button>
        <Button
          onClick={onClickCreate}
          className={styles.boxButtons__buttonCreate}
        >
          Create
        </Button>
      </div>
    </div>
  );
}

export default ModalCustomizeServer;
