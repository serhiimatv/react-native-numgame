import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppLayout from './components/Layouts/AppLayout';
import AppContent from './components/AppContent';

function App() {
  return (
    <SafeAreaProvider>
      <AppLayout>
        <StatusBar barStyle="light-content" />
        <AppContent />
      </AppLayout>
    </SafeAreaProvider>
  );
}

export default App;
