import styles from './index.module.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../../redux/userInfo/selectors';
import Cookies from 'universal-cookie';
import Avatar from '../Avatar';
import Microphone from '../Microphone';
import Headphones from '../Headphones';
import { SettingsIcon } from '../icons';
import { Modal } from '@mui/material';
import UserInfoModal from '../UserInfoModal';

function UserPanel() {
  const [isHovered, setIsHovered] = useState(false);
  const statusIconPropsStyle = isHovered ? 'var(--gray-5)' : 'var(--gray-10)';
  const [microphoneStatus, setMicrophoneStatus] = useState('');
  const [microphoneClickDisabled, setMicrophoneClickDisabled] = useState(false);
  const [headhonesStatus, setHeadphonesStatus] = useState('');
  const [headhonesClickDisabled, setHeadphonesClickDisabled] = useState(false);
  const [userInfoModalActive, setUserInfoModalActive] = useState(false);
  const cookies = new Cookies();

  const personalInfo = useSelector(getUserInfo);
  const { username, hash, status, microphone, headphones, avatar } =
    personalInfo;

  useEffect(() => {
    setMicrophoneStatus(microphone);
    setHeadphonesStatus(headphones);
  }, [microphone, headphones]);

  const onClickMicrophone = async () => {
    if (microphoneClickDisabled) {
      return;
    }

    setMicrophoneClickDisabled(true);

    const token = cookies.get('authToken', { path: '/' });
    try {
      await fetch('http://localhost:80/users/microphone', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setMicrophoneStatus(!microphoneStatus);
    } catch (error) {
      console.log(error);
    }

    setMicrophoneClickDisabled(false);
  };

  const onClickHeadphones = async () => {
    if (headhonesClickDisabled) {
      return;
    }

    setHeadphonesClickDisabled(true);

    const token = cookies.get('authToken', { path: '/' });
    try {
      await fetch('http://localhost:80/users/headphones', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setHeadphonesStatus(!headhonesStatus);
    } catch (error) {
      console.log(error);
    }

    setHeadphonesClickDisabled(false);
  };

  const onClickSettings = () => {};

  const onClickAccountInfo = () => {
    setUserInfoModalActive(!userInfoModalActive);
  };

  const closeUserInfoModal = () => setUserInfoModalActive(false);

  return (
    <div className={styles.box}>
      <div
        className={styles.accountInfo}
        onClick={onClickAccountInfo}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.avatar}>
          <Avatar
            avatar={avatar}
            status={status}
            statusBcgColor={statusIconPropsStyle}
          />
        </div>
        <div className={styles.name}>{username}</div>
        <div className={styles.hash}>#{hash.toString().padStart(4, '0')}</div>
      </div>
      <Modal
        open={userInfoModalActive}
        onClose={closeUserInfoModal}
        slotProps={{ backdrop: { sx: { backgroundColor: '#00000000' } } }}
        disablePortal={true}
        sx={{
          position: 'absolute',
          top: '-384px',
          left: '-30px',
        }}
      >
        <UserInfoModal closeUserInfoModal={closeUserInfoModal} />
      </Modal>
      <div className={styles.settingsIcons}>
        <Microphone
          microphoneStatus={microphoneStatus}
          onClick={onClickMicrophone}
        />
        <Headphones
          headphonesStatus={headhonesStatus}
          onClick={onClickHeadphones}
        />
        <div onClick={onClickSettings} className={styles.icon}>
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
