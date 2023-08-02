import styles from './index.module.css';
import Button from '@mui/base/Button';
import { ArrowRight2, CloseIcon, CreateMyOwn, JoinAServer } from '../../icons';

function ModalCreateServer({
  onClickClose,
  onClickCreateMyOwn,
  onClickJoinServer,
}) {
  return (
    <div className={styles.block}>
      <Button onClick={onClickClose} className={styles.buttonClose}>
        <CloseIcon />
      </Button>
      <div className={styles.title}>Create a server</div>
      <div className={styles.subtitle}>
        Your server is where you and your friends hang out. Make yours and start
        talking.
      </div>
      <Button onClick={onClickCreateMyOwn} className={styles.buttonCreateMyOwn}>
        <div className={styles.buttonCreateMyOwn__icon}>
          <CreateMyOwn />
        </div>
        <div className={styles.buttonCreateMyOwn__boxText}>
          <div className={styles.buttonCreateMyOwn__title}>Create My Own</div>
        </div>
        <ArrowRight2 />
      </Button>
      <Button onClick={onClickJoinServer} className={styles.buttonJoinServer}>
        <div className={styles.buttonJoinServer__icon}>
          <JoinAServer />
        </div>
        <div className={styles.buttonJoinServer__boxText}>
          <div className={styles.buttonJoinServer__title}>Join a Server</div>
          <div className={styles.buttonJoinServer__subtitle}>
            Check out public communities in Server Discovery.
          </div>
        </div>
        <ArrowRight2 />
      </Button>
    </div>
  );
}

export default ModalCreateServer;
