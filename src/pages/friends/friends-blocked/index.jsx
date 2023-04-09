import { useEffect, useState } from 'react';
import FriendsPageBackground from '../../../common/components/FriendsPageBackground';
import Search from '../../../common/components/Search';

export function FriendsBlocked() {
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    setCounter(null);
  }, []);

  return (
    <FriendsPageBackground
      searchBox={<Search />}
      friendsCounter={counter ? `ONLINE-${counter}` : null}
    ></FriendsPageBackground>
  );
}

export default FriendsBlocked;
