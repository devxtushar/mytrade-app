import './global.css';

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import SignInScreen from './src/screens/SignInScreen';

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBar />
        <SignInScreen />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
