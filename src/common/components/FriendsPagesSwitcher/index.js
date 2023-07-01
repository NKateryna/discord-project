import { useContext } from 'react';
import { FriendsPagesContext } from '../../../contexts/FriendsPagesContext';
import { FriendsAdd, SharedFriendsPage } from '../../../pages/friends';
// import SharedFriendsPage from '../../../pages/friends/shared-friends-page/friends';
import { Accept, Deny, Message, More, UnblockUser } from '../FriendItemButtons';
import FriendsEmpty from '../FriendsEmpty';
import {
  LoadingV11Icon,
  LoadingV2Icon,
  LoadingV3Icon,
  LoadingV4Icon,
} from '../icons';

function FriendsPagesSwitcher() {
  const [value] = useContext(FriendsPagesContext);

  switch (value) {
    case 0:
      return (
        <SharedFriendsPage
          pageName="online"
          counterText="ONLINE"
          buttonsFriendItem={[<Message />, <More />]}
          FriendsEmpty={
            <FriendsEmpty
              emptyIcon={<LoadingV11Icon />}
              text={'Nobody wants to play with Wumpus.'}
            />
          }
        />
      );
    case 1:
      return (
        <SharedFriendsPage
          pageName="all"
          counterText="ALL FRIENDS"
          buttonsFriendItem={[<Message />, <More />]}
          FriendsEmpty={
            <FriendsEmpty
              emptyIcon={<LoadingV2Icon />}
              text={'Wumpus is waiting on friends. You don’t have though!'}
              buttonText={'Add Friend'}
            />
          }
        />
      );
    case 2:
      return (
        <SharedFriendsPage
          pageName="pending"
          counterText="PEHDING"
          buttonsFriendItem={[<Accept />, <Deny />]}
          FriendsEmpty={
            <FriendsEmpty
              emptyIcon={<LoadingV4Icon />}
              text={
                'There are no pending friend requests. Here’s Wumpus for now.'
              }
            />
          }
        />
      );
    case 3:
      return (
        <SharedFriendsPage
          pageName="blocked"
          counterText="BLOCKED"
          buttonsFriendItem={[<UnblockUser />]}
          FriendsEmpty={
            <FriendsEmpty
              emptyIcon={<LoadingV3Icon />}
              text={'You can’t unblock the Wumpus.'}
            />
          }
        />
      );
    case 4:
      return <FriendsAdd />;
    default:
      return (
        <SharedFriendsPage
          pageName="online"
          counterText="ONLINE"
          buttonsFriendItem={[<Message />, <More />]}
          FriendsEmpty={
            <FriendsEmpty
              emptyIcon={<LoadingV11Icon />}
              text={'Nobody wants to play with Wumpus.'}
            />
          }
        />
      );
  }
}

export default FriendsPagesSwitcher;
