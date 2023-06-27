import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';
import FriendItem from '../../../common/components/FriendItem';
import { Message, More } from '../../../common/components/FriendItemButtons';
import FriendsEmpty from '../../../common/components/FriendsEmpty';
import { LoadingV2Icon } from '../../../common/components/icons';
import { FriendsPagesContext } from '../../../contexts/FriendsPagesContext';
import { getFriends } from '../../../redux/friends/selectors';
import { fetchFriends } from '../../../redux/friends/actions';

export function FriendsAll() {
  // eslint-disable-next-line
  const [_, setValue] = useContext(FriendsPagesContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const friendsData = useSelector(getFriends);
  const friendsAll = friendsData.data;
  const total = friendsData.total;

  useEffect(() => {
    dispatch(fetchFriends(navigate, cookies, 'all'));
    // eslint-disable-next-line
  }, []);

  const buttonAddFriend = () => {
    setValue(4);
  };

  return total ? (
    <FriendsPageBackground
      searchBox={<Search />}
      friendsCounter={`ALL FRIENDS-${total}`}
    >
      {friendsAll.map((friend) => {
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
      emptyIcon={<LoadingV2Icon />}
      text={'Wumpus is waiting on friends. You don’t have though!'}
      buttonText={'Add Friend'}
      onClick={buttonAddFriend}
    />
  );
}

export default FriendsAll;
