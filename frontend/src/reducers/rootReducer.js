import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  // add outros reducers aqui se necessário
});

export default rootReducer;

