import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen, Page2Screen, Page3Screen } from '../screens';


const Stack = createStackNavigator();

export const StackNavitagor = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page1Screen" component={Page1Screen} />
      <Stack.Screen name="Page2Screen" component={Page2Screen} />
      <Stack.Screen name="Page3Screen" component={Page3Screen} />

    </Stack.Navigator>
  )
}
