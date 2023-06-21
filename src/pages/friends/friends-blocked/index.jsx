import { useEffect, useState } from 'react';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';
import FriendItem from '../../../common/components/FriendItem';
import { UnblockUser } from '../../../common/components/FriendItemButtons';
import FriendsEmpty from '../../../common/components/FriendsEmpty';
import { LoadingV3Icon } from '../../../common/components/icons';

export function FriendsBlocked() {
  const [counter, setCounter] = useState(0);
  const users = [];

  useEffect(() => {
    setCounter(users.length);
  }, []);

  return users.length ? (
    <FriendsPageBackground
      searchBox={<Search />}
      friendsCounter={counter ? `BLOCKED-${counter}` : null}
    >
      {users.map((user) => {
        return (
          <FriendItem
            avatar={user.avatar}
            status={user.status}
            username={user.username}
            hash={user.hash}
            text="Blocked"
            buttons={[<UnblockUser />]}
            key={user.id}
          />
        );
      })}
    </FriendsPageBackground>
  ) : (
    <FriendsEmpty
      emptyIcon={<LoadingV3Icon />}
      text={'You can’t unblock the Wumpus.'}
    />
  );
}

export default FriendsBlocked;
