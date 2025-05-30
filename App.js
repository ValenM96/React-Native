import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Platform } from 'react-native';

// Store
import { store, persistor } from './src/store';

// Components
import LoadingSpinner from './src/components/common/LoadingSpinner';
import ErrorBoundary from './src/components/common/ErrorBoundary';

// Styles
import { COLORS } from './src/styles/colors';

// Componente temporal mientras configuramos
const TempApp = () => (
  <View style={styles.container}>
    <Text style={styles.title}>🛒 FreshMarket</Text>
    <Text style={styles.subtitle}>E-commerce con Expo + Firebase</Text>
    <Text style={styles.description}>
      ✅ Redux configurado{'\n'}
      ✅ Firebase listo{'\n'}
      ✅ Persistencia activada{'\n'}
      🔄 Navegación en progreso...
    </Text>
  </View>
);

export default function App() {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
            <StatusBar
              style={Platform.OS === 'web' ? 'auto' : 'light'}
              backgroundColor={COLORS.statusBar}
            />
            <TempApp />
            {/* <AppNavigator /> */}
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.text.secondary,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: COLORS.text.primary,
    textAlign: 'center',
    lineHeight: 24,
  },
});
