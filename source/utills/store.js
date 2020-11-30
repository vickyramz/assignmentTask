/* eslint-disable */
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../redux/reducers";
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native'
const middleware = [thunk];
const persistConfig = {
  key: 'root',
  keyPrefix: '',
  storage: AsyncStorage, 
 };

 const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const appReducer = combineReducers({
  ...reducers
});
const pReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};

const composedEnhancers = compose(
  applyMiddleware(...middleware)
);

const stores = createStore(
  pReducer,
  initialState,
  composedEnhancers
);
export const store = stores;
export const persistor = persistStore(store);

