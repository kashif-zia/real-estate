import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { inputsReducer } from './reducers/inputsReducer';
import { addToWishListReducer } from './reducers/addToWishListReducer';
import { addToCompareReducer } from './reducers/addToCompareReducer';
import { currencyReducer } from './reducers/currencyReducer';
import { gridReducer } from './reducers/gridReducer';
import authReducer from './reducers/authReducer';

// Create a separate reducer configuration for authReducer
const authPersistConfig = {
  key: 'auth',
  storage: storage,
};
const userPersistConfig = {
  key: 'user',
  storage: storage,
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

// Combine only the authReducer with other reducers if needed
const rootReducer = combineReducers({
  inputsReducer,
  addToWishListReducer,
  addToCompareReducer,
  currencyReducer,
  gridReducer,
  auth: authPersistedReducer, // Use 'auth' as the key for authReducer in the state
});

export const store = configureStore({
  reducer: rootReducer,
});
export const persistor = persistStore(store);
