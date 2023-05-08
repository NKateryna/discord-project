import { useEffect, useState } from 'react';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';
import FriendItem from '../../../common/components/FriendItem';
import { Accept, Deny } from '../../../common/components/FriendItemButtons';
import users from '../../../redux/users';

export function FriendsPending() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(users.length);
  }, []);

  return (
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
  );
}

export default FriendsPending;
