import { useEffect, useState } from 'react';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';
import FriendItem from '../../../common/components/FriendItem';
import { Message, More } from '../../../common/components/FriendItemButtons';
import users from '../../../redux/users';
import FriendsEmpty from '../../../common/components/FriendsEmpty';
import { LoadingV2Icon } from '../../../common/components/icons';

export function FriendsAll() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(users.length);
  }, []);

  return users.length ? (
    <FriendsPageBackground
      searchBox={<Search />}
      friendsCounter={counter ? `ALL FRIENDS-${counter}` : null}
    >
      {users.map((user) => {
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
      emptyIcon={<LoadingV2Icon />}
      text={'Wumpus is waiting on friends. You don’t have though!'}
      buttonText={'Add Friend'}
    />
  );
}

export default FriendsAll;
