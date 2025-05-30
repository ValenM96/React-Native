import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import slices
import authSlice from './slices/authSlice';
import productSlice from './slices/productSlice';
import cartSlice from './slices/cartSlice';
import syncSlice from './slices/syncSlice';

// Import middleware
import syncMiddleware from './middleware/syncMiddleware';

// Configuración de persistencia
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'cart'], // Solo persistir auth y cart
};

// Configuración específica para cada slice
const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['user', 'token', 'isAuthenticated']
};

const cartPersistConfig = {
  key: 'cart',
  storage: AsyncStorage,
  whitelist: ['items', 'total']
};

// Combine reducers
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  products: productSlice,
  cart: persistReducer(cartPersistConfig, cartSlice),
  sync: syncSlice,
});

// Crear reducer persistido
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configurar store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/FLUSH',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/PERSIST',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }).concat(syncMiddleware),
  devTools: __DEV__, // Solo en desarrollo
});

// Crear persistor
export const persistor = persistStore(store);

export default store;