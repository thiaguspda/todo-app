// src/store/store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk'; // Importando corretamente com `{ thunk }`
import rootReducer from '../reducers/rootReducer'; // Caminho ajustado para o rootReducer

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
