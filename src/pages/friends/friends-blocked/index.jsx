import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';
import FriendItem from '../../../common/components/FriendItem';
import { UnblockUser } from '../../../common/components/FriendItemButtons';
import FriendsEmpty from '../../../common/components/FriendsEmpty';
import { LoadingV3Icon } from '../../../common/components/icons';
import { getFriends } from '../../../redux/friends/selectors';
import { fetchFriends } from '../../../redux/friends/actions';

export function FriendsBlocked() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const friendsData = useSelector(getFriends);
  const blockedFriends = friendsData.data;
  const total = friendsData.total;

  useEffect(() => {
    dispatch(fetchFriends(navigate, cookies, 'blocked'));
    // eslint-disable-next-line
  }, []);

  return total ? (
    <FriendsPageBackground
      searchBox={<Search />}
      friendsCounter={`BLOCKED-${total}`}
    >
      {blockedFriends.map((friend) => {
        return (
          <FriendItem
            avatar={friend.avatar}
            status={friend.status}
            username={friend.username}
            hash={friend.hash}
            text="Blocked"
            buttons={[<UnblockUser />]}
            key={friend._id}
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
