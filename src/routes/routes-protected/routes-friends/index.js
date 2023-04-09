import { Routes, Route } from 'react-router-dom';

function FriendsRouters() {
  return (
    <Routes>
      <Route path=":friend-id/*" element={<p>:friend-id</p>} />
    </Routes>
  );
}

export default FriendsRouters;
