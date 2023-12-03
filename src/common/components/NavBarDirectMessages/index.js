import styles from './index.module.css';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import {
  fetchСonversations,
  deleteСonversationAsync,
} from '../../../redux/conversations/actions';
import { FriendsIcon, NitroIcon } from '../icons';
import NavigationBarSearch from '../NavigationBarSearch';
import NavigationBarItem from '../NavigationBarItem';
import UserPanel from '../UserPanel';
import { getConversations } from '../../../redux/conversations/selectors';

function NavBarDirectMessages({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const conversationsData = useSelector(getConversations);
  const cookies = new Cookies();

  useEffect(() => {
    dispatch(fetchСonversations(navigate, cookies));
    // eslint-disable-next-line
  }, []);

  function onClickButtonFriends() {
    navigate('/channels/@me');
  }
  function onClickButtonNitro() {
    navigate('/nitro');
  }

  const onClickOpenConversation = (id) => {
    return () => navigate(`/channels/@me/${id}`);
  };
  const onClickDeleteChat = (id) => {
    return () => dispatch(deleteСonversationAsync(navigate, cookies, id));
  };

  return (
    <div className={styles.wrapperNavigationBar}>
      <div className={styles.navigationBar}>
        <NavigationBarSearch />
        <div className={styles.navigationPanel}>
          <div className={styles.NavButtonsBlock}>
            <NavigationBarItem
              icon={<FriendsIcon />}
              name="Friends"
              onClickItem={onClickButtonFriends}
              active={location.pathname.startsWith('/channels/@me')}
            />
            <NavigationBarItem
              icon={<NitroIcon />}
              name="Nitro"
              onClickItem={onClickButtonNitro}
              active={location.pathname === '/nitro'}
            />
          </div>
          <div className={styles.directMessagesBlock}>
            <div className={styles.directMessagesTitle}>DIRECT MESSAGES</div>
            {conversationsData.data.map((conversation) => {
              const { username, avatar, status } = conversation.sender;
              return (
                <NavigationBarItem
                  id={conversation._id}
                  name={username}
                  avatar={avatar}
                  status={status}
                  onClickItem={onClickOpenConversation(conversation._id)}
                  onClickDeleteChat={onClickDeleteChat(conversation._id)}
                  key={conversation._id}
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

export default NavBarDirectMessages;
