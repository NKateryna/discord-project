import styles from './index.module.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../../redux/userInfo/selectors';
import Avatar from '../Avatar';
import CreateStatus from '../CreateStatus';
import { ArrowRight, LogOut } from '../icons';
import StatusModal from '../StatusModal';

function UserInfoModal({ closeUserInfoModal }) {
  const statusIconPropsStyle = 'var(--gray-16)';

  const personalInfo = useSelector(getUserInfo);
  const { username, hash, status, avatar, createdAt } = personalInfo;
  const [memberIhfoData, setMemberIhfoData] = useState(null);
  const statusIcon = CreateStatus(status, { fill: 'var(--gray-17)' });
  const statusText = {
    ONLINE: 'Online',
    AWAY: 'Idle',
    BUSY: 'Do Not Disturb',
    OFFLINE: 'Invisible',
  };

  useEffect(() => {
    const dateRegistration = new Date(createdAt);
    const optionsDate = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    setMemberIhfoData(dateRegistration.toLocaleString('en-US', optionsDate));
  }, [createdAt]);

  const onClickLogOut = () => {
    closeUserInfoModal();
  };

  return (
    <div className={styles.bcg}>
      <div className={styles.banner}></div>
      <div className={styles.avatar}>
        <Avatar
          avatar={avatar}
          status={status}
          statusBcgColor={statusIconPropsStyle}
          bigAvatar={true}
        />
      </div>
      <div className={styles.box}>
        <div className={styles.userInfo}>
          <div className={styles.userInfoText}>{`${username}#${hash}`}</div>
        </div>
        <div className={styles.memberIhfo}>
          <div className={styles.memberIhfoTitle}>DISCORD MEMBER SINCE</div>
          <div className={styles.memberIhfoData}>{memberIhfoData}</div>
        </div>
        <div className={styles.statusIhfo}>
          <div className={styles.statusIhfoIcon}>{statusIcon}</div>
          <div className={styles.statusText}>{statusText[status]}</div>
          <div className={styles.statusArrow}>
            <ArrowRight />
          </div>
          <div className={styles.statusModal}>
            <StatusModal closeUserInfoModal={closeUserInfoModal} />
          </div>
        </div>
        <div className={styles.logOut} onClick={onClickLogOut}>
          <LogOut />
          <div className={styles.logOutText}>Log Out</div>
        </div>
      </div>
    </div>
  );
}

export default UserInfoModal;
