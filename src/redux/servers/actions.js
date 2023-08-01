import { creationUserInfo } from '../userInfo/actions';

const actions = {
  ADDING_SERVER: 'ADDING_SERVER',
  SAVE_ACTIVE_ITEM_SIDEBAR: 'SAVE_ACTIVE_ITEM_SIDEBAR',
  CREATING_SERVERS_LIST: 'CREATING_SERVER_LIST',
};

export default actions;

export const creationServersList = (servers) => {
  return { type: actions.CREATING_SERVERS_LIST, payload: { servers } };
};

export const addingServer = (server) => {
  return { type: actions.ADDING_SERVER, payload: { server } };
};

export const saveActiveItem = (id) => {
  return {
    type: actions.SAVE_ACTIVE_ITEM_SIDEBAR,
    payload: { id },
  };
};

export const fetchUserData = (navigate, cookies) => async (dispatch) => {
  const token = cookies.get('authToken', { path: '/' });

  if (!token) {
    navigate('login');
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
          navigate('login');
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
          navigate('login');
          throw new Error('Unauthorized');
        }
      }
      const serversData = await serversResponse.json();

      const servers = serversData.data;
      dispatch(creationServersList(servers));
    } catch (error) {
      console.log(error);
    }
  }
};

export const creatingNewServer =
  (navigate, cookies, serverName) => async () => {
    const token = cookies.get('authToken', { path: '/' });

    if (!token) {
      navigate('login');
    } else {
      try {
        const userInfoResponse = await fetch(`http://localhost:80/servers`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: serverName,
          }),
        });
        if (!userInfoResponse.ok) {
          if (userInfoResponse.status === 401) {
            navigate('login');
            throw new Error('Unauthorized');
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
