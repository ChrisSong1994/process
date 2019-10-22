import ActiveTypes from '../active/activeTypes';
import recorder from 'src/components/recoder';
import _ from 'lodash';

const initialState = {
  nodes: {}, // {id:{id:string,(width,height,x,y):number,style:object}}
  selectNodes: [] // [id:string]
};

export default function(state = initialState, action) {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case ActiveTypes.GO_BACK:
      newState = recorder.back();
      break;
    case ActiveTypes.GO_FORWARD:
      newState = recorder.forward();
      break;
    case ActiveTypes.ADD_NODE:
      newState = {
        ...newState,
        nodes: { ...newState.nodes, ...action.payload }
      };
      recorder.push(newState);
      break;
    case ActiveTypes.UPDATE_NODE:
      newState.nodes[action.payload.id] = {
        ...newState.nodes[action.payload.id],
        ...action.payload.data
      };
      recorder.push(newState);
      break;
    case ActiveTypes.UPDATE_SELECT_NODES:
      newState.selectNodes = action.payload.nodes;
      recorder.push(newState);
      break;
  }
  return newState;
}
