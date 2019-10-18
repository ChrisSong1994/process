import ActiveTypes from '../active/activeTypes';

const initialState = {
  nodes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActiveTypes.ADD_NODE:
      return {
        ...state,
        nodes: [...state.nodes, action.payload]
      };
    default:
      return state;
  }
}
