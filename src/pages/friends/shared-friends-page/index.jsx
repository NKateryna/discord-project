import { cloneElement, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';
import FriendItem from '../../../common/components/FriendItem';
import { getFriends } from '../../../redux/friends/selectors';
import { fetchFriends } from '../../../redux/friends/actions';

export function SharedFriendsPage({
  pageName,
  counterText,
  buttonsFriendItem,
  FriendsEmpty,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const friendsData = useSelector(getFriends);
  const friendsAll = friendsData.data;
  const total = friendsData.total;
  const loadingStatus = friendsData.toggleLoading;
  const toggleSearch = friendsData.toggleSearch;
  const friendsDataSearch = friendsData.dataSearch;
  const totalSearch = friendsData.totalSearch;

  useLayoutEffect(() => {
    dispatch(fetchFriends(navigate, cookies, pageName));
    // eslint-disable-next-line
  }, [pageName]);

  if (loadingStatus) {
    return <FriendsPageBackground />;
  }
  if (!total) {
    return FriendsEmpty;
  }

  return (
    <FriendsPageBackground
      searchBox={<Search />}
      friendsCounter={`${counterText}-${toggleSearch ? totalSearch : total}`}
    >
      {toggleSearch
        ? friendsDataSearch.map((friend) => {
            const { avatar, status, username, hash, _id } = friend;
            return (
              <FriendItem
                onClick={null}
                avatar={avatar}
                status={status}
                username={username}
                hash={hash.toString().padStart(4, '0')}
                buttons={buttonsFriendItem.map((button, index) => (
                  <div key={index}>
                    {cloneElement(button, {
                      activeFriendItem: friend,
                      pageName: pageName,
                    })}
                  </div>
                ))}
                key={_id}
              />
            );
          })
        : friendsAll.map((friend) => {
            const { avatar, status, username, hash, _id } = friend;
            return (
              <FriendItem
                onClick={null}
                avatar={avatar}
                status={status}
                username={username}
                hash={hash.toString().padStart(4, '0')}
                buttons={buttonsFriendItem.map((button, index) => (
                  <div key={index}>
                    {cloneElement(button, {
                      activeFriendItem: friend,
                      pageName: pageName,
                    })}
                  </div>
                ))}
                key={_id}
              />
            );
          })}
    </FriendsPageBackground>
  );
}

export default SharedFriendsPage;
