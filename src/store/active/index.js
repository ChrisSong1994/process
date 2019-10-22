import ActiveTypes from './activeTypes';

export const go_back = () => {
  return {
    type: ActiveTypes.GO_BACK
  };
};

export const go_forward = () => {
  return {
    type: ActiveTypes.GO_FORWARD
  };
};

export const add_node = node => {
  return {
    type: ActiveTypes.ADD_NODE,
    payload: { [node.id]: node }
  };
};

export const update_node = (id, data) => {
  return {
    type: ActiveTypes.UPDATE_NODE,
    payload: { id, data }
  };
};

export const update_select_nodes = nodes => {
  return {
    type: ActiveTypes.UPDATE_SELECT_NODES,
    payload: {nodes}
  };
};
