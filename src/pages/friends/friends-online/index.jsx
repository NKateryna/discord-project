import { useEffect, useState } from 'react';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';
import FriendItem from '../../../common/components/FriendItem';
import { Message, More } from '../../../common/components/FriendItemButtons';
import users from '../../../redux/users';
import { LoadingV11Icon } from '../../../common/components/icons';
import FriendsEmpty from '../../../common/components/FriendsEmpty';

export function FriendsOnline() {
  const [counter, setCounter] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    setOnlineUsers(users.filter((user) => user.status === 'ONLINE'));
  }, []);

  useEffect(() => {
    setCounter(onlineUsers.length);
  }, [onlineUsers]);

  return onlineUsers.length ? (
    <FriendsPageBackground
      searchBox={<Search />}
      friendsCounter={counter ? `ONLINE-${counter}` : null}
    >
      {onlineUsers.map((user) => {
        return (
          <FriendItem
            avatar={user.avatar}
            status={user.status}
            username={user.username}
            hash={user.hash}
            buttons={[<Message />, <More />]}
            key={user.id}
          />
        );
      })}
    </FriendsPageBackground>
  ) : (
    <FriendsEmpty
      emptyIcon={<LoadingV11Icon />}
      text={'Nobody wants to play with Wumpus.'}
    />
  );
}

export default FriendsOnline;
