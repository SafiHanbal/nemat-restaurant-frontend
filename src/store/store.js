import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
});

export const persistor = persistStore(store);
