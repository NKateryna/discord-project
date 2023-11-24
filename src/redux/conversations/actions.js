const actions = {
  CREATING_CONVERSATIONS_LIST: 'CREATING_CONVERSATIONS_LIST',
  CONVERSATIONS_TOGGLE_LOADING: 'CONVERSATIONS_TOGGLE_LOADING',
  ADDING_CONVERSATION: 'ADDING_CONVERSATION',
  DELETE_CONVERSATION: 'DELETE_CONVERSATION',
};

export default actions;

export const creationСonversationsList = (data) => {
  return {
    type: actions.CREATING_CONVERSATIONS_LIST,
    payload: { data },
  };
};

export const setLoaging = (toggleValue) => {
  return {
    type: actions.CONVERSATIONS_TOGGLE_LOADING,
    payload: { toggleValue },
  };
};

export const addingСonversation = (conversation) => {
  return { type: actions.ADDING_CONVERSATION, payload: { conversation } };
};

export const deleteСonversation = (id) => {
  return {
    type: actions.DELETE_CONVERSATION,
    payload: { id },
  };
};

export const fetchСonversations = (navigate, cookies) => async (dispatch) => {
  const token = cookies.get('authToken', { path: '/' });

  if (!token) {
    navigate('/login');
  } else {
    dispatch(setLoaging(true));
    try {
      const userInfoResponse = await fetch(
        'http://localhost:80/users/conversations',
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

      const conversations = await userInfoResponse.json();
      const { data } = conversations;

      dispatch(creationСonversationsList(data));
      dispatch(setLoaging(false));
    } catch (error) {
      console.log(error);
    }
  }
};

export const deleteСonversationAsync =
  (navigate, cookies, id) => async (dispatch) => {
    const token = cookies.get('authToken', { path: '/' });

    if (!token) {
      navigate('/login');
    } else {
      try {
        const requestDeleteСonversation = await fetch(
          `http://localhost:80/users/conversations/${id}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (!requestDeleteСonversation.ok) {
          if (requestDeleteСonversation.status === 401) {
            navigate('/login');
            throw new Error('Unauthorized');
          }
        }

        dispatch(deleteСonversation(id));
      } catch (error) {
        console.log(error);
      }
    }
  };
