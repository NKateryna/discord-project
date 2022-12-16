import { Routes, Route } from 'react-router-dom';

import FriendsAdd from '../../pages/dashboard/friends/friends-add';
import FriendsAll from '../../pages/dashboard/friends/friends-all';
import FriendsBlocked from '../../pages/dashboard/friends/friends-blocked';
import FriendsOnline from '../../pages/dashboard/friends/friends-online';
import FriendsPending from '../../pages/dashboard/friends/friends-pending';

function FriendsRouters() {
  return (
    <Routes>
      <Route path="online" element={<FriendsOnline />} />
      <Route path="all" element={<FriendsAll />} />
      <Route path="pending" element={<FriendsPending />} />
      <Route path="blocked" element={<FriendsBlocked />} />
      <Route path="add" element={<FriendsAdd />} />
      <Route path=":friend-id/*" element={<p>:friend-id</p>} />
    </Routes>
  );
}

export default FriendsRouters;
