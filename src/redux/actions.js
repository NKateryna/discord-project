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

export const fetchServerListWithRouting =
  (navigate, cookies) => async (dispatch) => {
    const token = cookies.get('authToken', { path: '/' });
    if (!token) {
      navigate('login');
    } else {
      try {
        const response = await fetch('http://localhost:80/servers', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          if (response.status === 401) {
            navigate('login');
            throw new Error('Unauthorized');
          }
        }
        const data = await response.json();
        const servers = data.data;
        dispatch(creationServersList(servers));
      } catch (error) {
        console.log(error);
      }
    }
  };
