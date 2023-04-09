import { useContext } from 'react';
import { FriendsPagesContext } from '../../../contexts/FriendsPagesContext';
import {
  FriendsAdd,
  FriendsAll,
  FriendsBlocked,
  FriendsOnline,
  FriendsPending,
} from '../../../pages/friends';

function FriendsPagesSwitcher() {
  const [value, setValue] = useContext(FriendsPagesContext);

  switch (value) {
    case 0:
      return <FriendsOnline />;
    case 1:
      return <FriendsAll />;
    case 2:
      return <FriendsPending />;
    case 3:
      return <FriendsBlocked />;
    case 4:
      return <FriendsAdd />;
    default:
      return <FriendsOnline />;
  }
}

export default FriendsPagesSwitcher;
