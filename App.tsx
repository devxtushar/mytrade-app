import './global.css';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from './src/screens/SignUpScreen';
import VerifyScreen from './src/screens/VerifyScreen';
import PinScreen from './src/screens/PinScreen';
import EnterScreen from './src/screens/EnterScreen';
import RootTab from './src/screens/RootTab';

export type RootStackParamList = {
  Signin: undefined;
  Signup: undefined;
  Verify: undefined;
  Pin: undefined;
  EnterPin: undefined;
  RootTab: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBar barStyle="light-content" backgroundColor="#605790" />

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
              }}
            />
            <Stack.Screen
              name="Verify"
              component={VerifyScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Pin"
              component={PinScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EnterPin"
              component={EnterScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RootTab"
              component={RootTab}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
