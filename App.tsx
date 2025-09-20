import './global.css';

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './src/screens/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from './src/screens/SignUpScreen';

export type RootStackParamList = {
  Signin: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Signin">
            <Stack.Screen
              name="Signin"
              component={SignInScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={SignUpScreen}
              options={{
                headerShown: false,
                // headerTitle: 'Sign Up',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
