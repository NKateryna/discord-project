import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';

export function FriendsAdd() {
  return (
    <FriendsPageBackground
      title={'ADD FRIEND'}
      helpText={'You can add a friend with Discord Tag. It’s cAse sEnSitIvE!'}
      addFriendPage={true}
      searchBox={<Search addFriendPage={true} />}
    ></FriendsPageBackground>
  );
}

export default FriendsAdd;
