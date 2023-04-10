import { useEffect, useState } from 'react';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';
import FriendItem from '../../../common/components/FriendItem';
import { UnblockUser } from '../../../common/components/FriendItemButtons';
import users from '../../../redux/users';

export function FriendsBlocked() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(users.length);
  }, []);

  return (
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
            text="Blocked"
            buttons={[<UnblockUser />]}
            key={user.id}
          />
        );
      })}
    </FriendsPageBackground>
  );
}

export default FriendsBlocked;
