import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';
import FriendItem from '../../../common/components/FriendItem';
import { Accept, Deny } from '../../../common/components/FriendItemButtons';
import FriendsEmpty from '../../../common/components/FriendsEmpty';
import { LoadingV4Icon } from '../../../common/components/icons';
import { getFriends } from '../../../redux/friends/selectors';
import { fetchFriends } from '../../../redux/friends/actions';

export function FriendsPending() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const friendsData = useSelector(getFriends);
  const pendingFriends = friendsData.data;
  const total = friendsData.total;

  useEffect(() => {
    dispatch(fetchFriends(navigate, cookies, 'pending'));
    // eslint-disable-next-line
  }, []);

  return total ? (
    <FriendsPageBackground
      searchBox={<Search />}
      friendsCounter={`PEHDING-${total}`}
    >
      {pendingFriends.map((friend) => {
        return (
          <FriendItem
            avatar={friend.avatar}
            status={friend.status}
            username={friend.username}
            hash={friend.hash}
            text="Incoming friend request"
            buttons={[<Accept />, <Deny />]}
            key={friend._id}
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
