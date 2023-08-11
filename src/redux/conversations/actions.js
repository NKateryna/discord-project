const actions = {
  CREATING_CONVERSATIONS_LIST: 'CREATING_CONVERSATIONS_LIST',
  DELETE_CONVERSATION: 'DELETE_CONVERSATION',
};

export default actions;

export const creationСonversationsList = (data) => {
  return {
    type: actions.CREATING_CONVERSATIONS_LIST,
    payload: { data },
  };
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
