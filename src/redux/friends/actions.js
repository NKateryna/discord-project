const actions = {
  CREATING_FRIENDS_LIST: 'CREATING_FRIENDS_LIST',
  REMOVE_FRIENDS_LIST: 'REMOVE_FRIENDS_LIST',
};

export default actions;

export const creationFriendsList = (data, total) => {
  return {
    type: actions.CREATING_FRIENDS_LIST,
    payload: { data, total },
  };
};

export const removeFriendsList = () => {
  return {
    type: actions.REMOVE_FRIENDS_LIST,
  };
};

export const fetchFriends =
  (navigate, cookies, status = 'online') =>
  async (dispatch) => {
    const token = cookies.get('authToken', { path: '/' });

    if (!token) {
      navigate('login');
    } else {
      dispatch(removeFriendsList());
      try {
        const userInfoResponse = await fetch(
          `http://localhost:80/users/friends?status=${status}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (!userInfoResponse.ok) {
          if (userInfoResponse.status === 401) {
            navigate('login');
            throw new Error('Unauthorized');
          }
        }

        const friends = await userInfoResponse.json();
        const { data, total } = friends;

        dispatch(creationFriendsList(data, total));
      } catch (error) {
        console.log(error);
      }
    }
  };
