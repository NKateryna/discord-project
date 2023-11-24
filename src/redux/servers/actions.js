import { creationUserInfo } from '../userInfo/actions';

const actions = {
  SET_IS_LOADED: 'SET_IS_LOADED',
  ADDING_SERVER: 'ADDING_SERVER',
  LEAVE_SERVER: 'LEAVE_SERVER',
  SAVE_ACTIVE_ITEM_SIDEBAR: 'SAVE_ACTIVE_ITEM_SIDEBAR',
  CREATING_SERVERS_LIST: 'CREATING_SERVER_LIST',
  CREATING_COMMUMITIES_LIST: 'CREATING_COMMUMITIES_LIST',
  SAVING_SEARCH_COMMUMITIES_LIST: 'SEARCH_COMMUMITIES',
};

export default actions;

export const creationServersList = (servers) => {
  return { type: actions.CREATING_SERVERS_LIST, payload: { servers } };
};

export const setIsLoaded = () => {
  return {
    type: actions.SET_IS_LOADED,
  };
};

export const addingServer = (server) => {
  return { type: actions.ADDING_SERVER, payload: { server } };
};

export const leaveServer = (id) => {
  return { type: actions.LEAVE_SERVER, payload: { id } };
};

export const saveActiveItem = (id) => {
  return {
    type: actions.SAVE_ACTIVE_ITEM_SIDEBAR,
    payload: { id },
  };
};

export const creationCommunitiesList = (communities) => {
  return { type: actions.CREATING_COMMUMITIES_LIST, payload: { communities } };
};

export const savingSearchCommunitiesList = (
  communitiesSearch,
  toggleSearch
) => {
  return {
    type: actions.SAVING_SEARCH_COMMUMITIES_LIST,
    payload: { communitiesSearch, toggleSearch },
  };
};

export const fetchUserData = (navigate, cookies) => async (dispatch) => {
  const token = cookies.get('authToken', { path: '/' });

  if (!token) {
    navigate('/login');
  } else {
    try {
      const userInfoResponse = await fetch('http://localhost:80/users/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!userInfoResponse.ok) {
        if (userInfoResponse.status === 401) {
          navigate('/login');
          throw new Error('Unauthorized');
        }
      }
      const userData = await userInfoResponse.json();

      const { accessToken, ...userInfo } = userData;
      cookies.set('authToken', accessToken, { path: '/' });
      dispatch(creationUserInfo(userInfo));

      const serversResponse = await fetch('http://localhost:80/servers', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      if (!serversResponse.ok) {
        if (serversResponse.status === 401) {
          navigate('/login');
          throw new Error('Unauthorized');
        }
      }
      const serversData = await serversResponse.json();

      const servers = serversData.data;
      dispatch(creationServersList(servers));
      dispatch(setIsLoaded());
    } catch (error) {
      console.log(error);
    }
  }
};

export const creatingNewServer =
  (navigate, cookies, serverName) => async (dispatch) => {
    const token = cookies.get('authToken', { path: '/' });

    if (!token) {
      navigate('/login');
    } else {
      try {
        const response = await fetch(`http://localhost:80/servers`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: serverName,
          }),
        });
        if (!response.ok) {
          if (response.status === 401) {
            navigate('/login');
            throw new Error('Unauthorized');
          }
        }
        const addedServer = await response.json();
        dispatch(addingServer(addedServer));
      } catch (error) {
        console.log(error);
      }
    }
    return true;
  };

export const joinNewServer =
  (navigate, cookies, community) => async (dispatch) => {
    const token = cookies.get('authToken', { path: '/' });

    if (!token) {
      navigate('/login');
    } else {
      try {
        const response = await fetch(
          `http://localhost:80/servers/${community._id}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (!response.ok) {
          if (response.status === 401) {
            navigate('/login');
            throw new Error('Unauthorized');
          }
        }

        await dispatch(addingServer(community));
        navigate(`/channels/${community._id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

export const leavingServer =
  (navigate, cookies, pathname, id) => async (dispatch) => {
    const token = cookies.get('authToken', { path: '/' });

    if (!token) {
      navigate('/login');
    } else {
      try {
        const response = await fetch(`http://localhost:80/servers/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          if (response.status === 401) {
            navigate('/login');
            throw new Error('Unauthorized');
          }
        }
        if (pathname === `/channels/${id}`) {
          navigate('/channels/@me');
        }
        dispatch(leaveServer(id));
      } catch (error) {
        console.log(error);
      }
    }
  };

export const fetchCommunities = (navigate, cookies) => async (dispatch) => {
  const token = cookies.get('authToken', { path: '/' });

  if (!token) {
    navigate('/login');
  } else {
    try {
      const response = await fetch('http://localhost:80/servers/explore', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          navigate('/login');
          throw new Error('Unauthorized');
        }
      }
      const communitiesData = await response.json();

      const communities = communitiesData.data;
      dispatch(creationCommunitiesList(communities));
    } catch (error) {
      console.log(error);
    }
  }
};
