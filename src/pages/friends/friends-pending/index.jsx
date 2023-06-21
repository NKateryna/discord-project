import { useEffect, useState } from 'react';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';
import FriendItem from '../../../common/components/FriendItem';
import { Accept, Deny } from '../../../common/components/FriendItemButtons';
import FriendsEmpty from '../../../common/components/FriendsEmpty';
import { LoadingV4Icon } from '../../../common/components/icons';

export function FriendsPending() {
  const [counter, setCounter] = useState(0);
  const users = [];

  useEffect(() => {
    setCounter(users.length);
  }, []);

  return users.length ? (
    <FriendsPageBackground
      searchBox={<Search />}
      friendsCounter={counter ? `PEHDING-${counter}` : null}
    >
      {users.map((user) => {
        return (
          <FriendItem
            avatar={user.avatar}
            status={user.status}
            username={user.username}
            hash={user.hash}
            text="Incoming friend request"
            buttons={[<Accept />, <Deny />]}
            key={user.id}
          />
        );
      })}
    </FriendsPageBackground>
  ) : (
    <FriendsEmpty
      emptyIcon={<LoadingV4Icon />}
      text={'There are no pending friend requests. Here’s Wumpus for now.'}
    />
  );
}

export default FriendsPending;
