import FriendsEmpty from '../../../common/components/FriendsEmpty';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';
import { LoadingV2Icon } from '../../../common/components/icons';

export function FriendsAdd() {
  return (
    <FriendsPageBackground
      title={'ADD FRIEND'}
      helpText={'You can add a friend with Discord Tag. It’s cAse sEnSitIvE!'}
      addFriendPage={true}
      searchBox={<Search addFriendPage={true} />}
    >
      <FriendsEmpty
        emptyIcon={<LoadingV2Icon />}
        text={'Wumpus is waiting on friends. You don’t have though!'}
      />
    </FriendsPageBackground>
  );
}

export default FriendsAdd;
