const actions = {
  CREATION_SERVERS: 'CREATION_SERVERS',
  SAVE_ACTIVE_ITEM_SIDEBAR: 'SAVE_ACTIVE_ITEM_SIDEBAR',
};

export default actions;

export const creationServers = (servers) => {
  return { type: actions.CREATION_SERVERS, payload: { servers: servers } };
};

export const saveActiveItem = (id) => {
  return {
    type: actions.SAVE_ACTIVE_ITEM_SIDEBAR,
    payload: { id: id },
  };
};

export const fetchServerListWithRouting =
  (navigate, cookies) => async (dispatch) => {
    const token = cookies.get('authToken', { path: '/' });
    if (!token) {
      navigate('login');
      console.log('no token');
    } else {
      try {
        const response = await fetch('http://localhost:80/servers', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        const servers = data.data;
        dispatch(creationServers(servers));
      } catch (error) {
        navigate('login');
      }
    }
  };
