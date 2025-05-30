import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tu configuración de Firebase
// Ve a Firebase Console > Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "tu-api-key-aqui",
  authDomain: "freshmarket-app.firebaseapp.com",
  databaseURL: "https://freshmarket-app-default-rtdb.firebaseio.com",
  projectId: "freshmarket-app",
  storageBucket: "freshmarket-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:android:abcd1234ef5678gh"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Auth con persistencia
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
} catch (error) {
  // Si ya está inicializado, usar la instancia existente
  auth = getAuth(app);
}

// Inicializar Database y Storage
const database = getDatabase(app);
const storage = getStorage(app);

export { auth, database, storage };
export default app;

// Configuración de desarrollo (usar datos mock si no hay Firebase)
export const isDevelopment = __DEV__;
export const useMockData = true; // Cambiar a false cuando tengas Firebase configurado