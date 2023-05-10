import styles from './index.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { FriendsIcon, NitroIcon } from '../icons';
import UserPanel from '../UserPanel';
import NavigationBarItem from '../NavigationBarItem';
import directMessages from '../../../redux/direct-messages';
import NavigationBarSearch from '../NavigationBarSearch';

function WrapperNavigationBar({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  function onClickButtonFriends() {
    return () => {
      navigate('/channels/@me');
    };
  }
  function onClickButtonNitro() {
    return () => {
      navigate('/nitro');
    };
  }

  return (
    <div className={styles.wrapperNavigationBar}>
      <div className={styles.NavigationBar}>
        {/* Search */}
        <NavigationBarSearch />
        <div className={styles.navigationPanel}>
          <div className={styles.NavButtonsBlock}>
            <NavigationBarItem
              icon={<FriendsIcon />}
              name="Friends"
              onClick={onClickButtonFriends()}
              active={location.pathname.startsWith('/channels/@me')}
            />
            <NavigationBarItem
              icon={<NitroIcon />}
              name="Nitro"
              onClick={onClickButtonNitro()}
              active={location.pathname === '/nitro'}
            />
          </div>
          <div className={styles.directMessagesBlock}>
            <div className={styles.directMessagesTitle}>DIRECT MESSAGES</div>
            {directMessages.messages.map((a) => {
              return (
                <NavigationBarItem
                  name={a.name}
                  avatar={a.avatar}
                  status={a.status}
                />
              );
            })}
          </div>
        </div>
        <UserPanel />
      </div>
      {children}
    </div>
  );
}

export default WrapperNavigationBar;
