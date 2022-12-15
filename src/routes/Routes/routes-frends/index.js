import { Routes, Route } from 'react-router-dom';

import FriendsOnline from '../../../pages/page/dashboard/friends/friends-online/friends-online';
import FriendsAll from '../../../pages/page/dashboard/friends/friends-all/friends-all';
import FriendsPending from '../../../pages/page/dashboard/friends/friends-pending/friends-pending';
import FriendsBlocked from '../../../pages/page/dashboard/friends/friends-blocked/friends-blocked';
import FriendsAdd from '../../../pages/page/dashboard/friends/friends-add/friends-add';

function FrendsRouters() {
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

export default FrendsRouters;
