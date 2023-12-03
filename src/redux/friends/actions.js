const actions = {
  CREATING_FRIENDS_LIST: 'CREATING_FRIENDS_LIST',
  REMOVE_FRIENDS_LIST: 'REMOVE_FRIENDS_LIST',
  FRIENDS_TOGGLE_LOADING: 'FRIENDS_TOGGLE_LOADING',
  SAVING_SEARCH_FRIENDS: 'SAVING_RESULT_SEARCH_FRIENDS',
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

export const setLoaging = (toggleValue) => {
  return {
    type: actions.FRIENDS_TOGGLE_LOADING,
    payload: { toggleValue },
  };
};

export const savingActiveItem = (activeItem) => {
  return {
    type: actions.SAVE_ACTIVE_ITEM,
    payload: { activeItem },
  };
};

export const savingSearchFriends = (dataSearch, totalSearch, toggleSearch) => {
  return {
    type: actions.SAVING_SEARCH_FRIENDS,
    payload: { dataSearch, totalSearch, toggleSearch },
  };
};

export const fetchFriends =
  (navigate, cookies, status = 'online') =>
  async (dispatch) => {
    const token = cookies.get('authToken', { path: '/' });

    if (!token) {
      navigate('/login');
    } else {
      dispatch(setLoaging(true));
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
            navigate('/login');
            throw new Error('Unauthorized');
          }
        }

        const friends = await userInfoResponse.json();
        const { data, total } = friends;

        dispatch(creationFriendsList(data, total));
        dispatch(setLoaging(false));
      } catch (error) {
        console.log(error);
      }
    }
  };

export const sendInvitationAnotherUser =
  (navigate, cookies, username, hash) => async () => {
    const token = cookies.get('authToken', { path: '/' });

    let searchStatus;

    if (!token) {
      navigate('/login');
    } else {
      try {
        const response = await fetch('http://localhost:80/users/friends', {
          method: 'POST',
          body: JSON.stringify({
            username: username,
            hash: +hash,
          }),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 204) {
          searchStatus = true;
        } else searchStatus = false;
      } catch (error) {
        searchStatus = false;
        console.log(error);
      }
    }
    return searchStatus;
  };

export const acceptFriendInvitation =
  (navigate, cookies, friendId) => async () => {
    const token = cookies.get('authToken', { path: '/' });

    if (!token) {
      navigate('/login');
    } else {
      try {
        const userInfoResponse = await fetch(
          `http://localhost:80/users/friends/accept/${friendId}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (!userInfoResponse.ok) {
          if (userInfoResponse.status === 401) {
            navigate('/login');
            throw new Error('Unauthorized');
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

export const declineFriendInvitation =
  (navigate, cookies, friendId) => async () => {
    const token = cookies.get('authToken', { path: '/' });

    if (!token) {
      navigate('/login');
    } else {
      try {
        const userInfoResponse = await fetch(
          `http://localhost:80/users/friends/accept/${friendId}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (!userInfoResponse.ok) {
          if (userInfoResponse.status === 401) {
            navigate('/login');
            throw new Error('Unauthorized');
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

export const blockFriend = (navigate, cookies, friendId) => async () => {
  const token = cookies.get('authToken', { path: '/' });

  if (!token) {
    navigate('/login');
  } else {
    try {
      const userInfoResponse = await fetch(
        `http://localhost:80/users/friends/block/${friendId}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (!userInfoResponse.ok) {
        if (userInfoResponse.status === 401) {
          navigate('/login');
          throw new Error('Unauthorized');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const unblockFriend = (navigate, cookies, friendId) => async () => {
  const token = cookies.get('authToken', { path: '/' });

  if (!token) {
    navigate('/login');
  } else {
    try {
      const userInfoResponse = await fetch(
        `http://localhost:80/users/friends/block/${friendId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (!userInfoResponse.ok) {
        if (userInfoResponse.status === 401) {
          navigate('/login');
          throw new Error('Unauthorized');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const deleteFriend = (navigate, cookies, friendId) => async () => {
  const token = cookies.get('authToken', { path: '/' });

  if (!token) {
    navigate('/login');
  } else {
    try {
      const userInfoResponse = await fetch(
        `http://localhost:80/users/friends/${friendId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (!userInfoResponse.ok) {
        if (userInfoResponse.status === 401) {
          navigate('/login');
          throw new Error('Unauthorized');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};
