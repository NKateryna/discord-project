const actions = {
  CREATION_SERVERS: 'CREATION_SERVERS',
  SAVE_ACTIVE_ITEM_SIDBAR: 'SAVE_ACTIVE_ITEM_SIDBAR',
};

export default actions;

export const creationServers = () => {
  return { type: actions.CREATION_SERVERS };
};

export const saveActiveItem = (id) => {
  return {
    type: actions.SAVE_ACTIVE_ITEM_SIDBAR,
    payload: { id: id },
  };
};
