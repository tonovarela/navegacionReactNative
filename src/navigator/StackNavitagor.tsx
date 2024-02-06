import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen, Page2Screen, Page3Screen, PersonaScreen } from '../screens';

export type RootStackParams = {
  Page1Screen:undefined,
  Page2Screen:undefined,
  Page3Screen:undefined,
  PersonaScreen:{id:number,nombre:string}
};


const Stack = createStackNavigator<RootStackParams>()
export const StackNavitagor = () => {
  return (
    <Stack.Navigator    
      screenOptions={
        {        
          cardStyle: { backgroundColor: '#fff' },          
          headerShown:true,          
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent'
          },
        }
      }
    >
      <Stack.Screen name="Page1Screen" options={{ title: "Pagina 1" }} component={Page1Screen} />
      <Stack.Screen name="Page2Screen" options={{ title: "Pagina 2" }} component={Page2Screen} />
      <Stack.Screen name="Page3Screen" options={{ title: "Pagina 3" }} component={Page3Screen} />
      <Stack.Screen name="PersonaScreen"  component={PersonaScreen} />
    </Stack.Navigator>
  )
}
