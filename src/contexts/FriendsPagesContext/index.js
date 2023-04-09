import { createContext, useState } from 'react';

export const FriendsPagesContext = createContext();

const FriendsPagestProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <FriendsPagesContext.Provider value={[value, setValue]}>
      {children}
    </FriendsPagesContext.Provider>
  );
};

export default FriendsPagestProvider;
