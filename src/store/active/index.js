import ActiveTypes from './activeTypes';

export const add_node = node => {
  return {
    type: ActiveTypes.ADD_NODE,
    payload: node
  };
};
