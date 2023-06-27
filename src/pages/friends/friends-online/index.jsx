import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';
import FriendItem from '../../../common/components/FriendItem';
import { Message, More } from '../../../common/components/FriendItemButtons';
import { LoadingV11Icon } from '../../../common/components/icons';
import FriendsEmpty from '../../../common/components/FriendsEmpty';
import { getFriends } from '../../../redux/friends/selectors';
import { fetchFriends } from '../../../redux/friends/actions';

export function FriendsOnline() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const friendsData = useSelector(getFriends);
  const onlineFriends = friendsData.data;
  const total = friendsData.total;

  useEffect(() => {
    dispatch(fetchFriends(navigate, cookies, 'online'));
    // eslint-disable-next-line
  }, []);

  return total ? (
    <FriendsPageBackground
      searchBox={<Search />}
      friendsCounter={`ONLINE-${total}`}
    >
      {onlineFriends.map((friend) => {
        return (
          <FriendItem
            avatar={friend.avatar}
            status={friend.status}
            username={friend.username}
            hash={friend.hash}
            buttons={[<Message />, <More />]}
            key={friend._id}
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
