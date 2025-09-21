import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Icons from '@react-native-vector-icons/material-icons';
import { Image, View } from 'react-native';
const Tab = createBottomTabNavigator();

function RootTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#605790',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="home-filled" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BNPL"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: 75,
                height: 75,
                borderRadius: '50%',
                backgroundColor: '#E6DFF9',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={require('../assests/brandLogo.png')}
                style={{ width: 50, height: 50 }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="account-balance-wallet" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootTab;
