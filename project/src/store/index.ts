import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { iniatialStoreState, reducers, StoreState, StoreActionTypes } from './store';

const store = createStore<StoreState, StoreActionTypes, any, any>(
   reducers,
   iniatialStoreState,
   composeWithDevTools(),
);

export default store;