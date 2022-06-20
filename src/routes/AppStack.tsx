import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import CreateNotification from '../screens/CreateNotification';
import Maps from '../screens/Maps';

const { Navigator, Screen } = createNativeStackNavigator();

export function App() {
  return (
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="Home"
          component={Home}
        />
        <Screen
          name="CreateNotification"
          component={CreateNotification}
        />
      <Screen
          name="Maps"
          component={Maps}
        />
      </Navigator>
  );
}