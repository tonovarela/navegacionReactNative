
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavitagor } from './StackNavitagor';
import {  Page2Screen, Page3Screen,  SettingsScreen } from '../screens';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();
export const MenuLateral = () => {
  const  {width} = useWindowDimensions();
    
  return (
    <Drawer.Navigator
    
    screenOptions={
      {      
        drawerType:   width >= 768 ? 'permanent' : 'front',
        headerShown:true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
      }
    }
    >
      <Drawer.Screen name="StackNavigator" options={{title:"Home"}} component={StackNavitagor} />            
      <Drawer.Screen name="SettingsScreen" options={{title:"Settings"}}  component={SettingsScreen} />            
      
      <Drawer.Screen name="Page2Screen" options={{title:"Page 2"}}  component={Page2Screen} />            
      <Drawer.Screen name="Page3Screen" options={{title:"Page 3"}}  component={Page3Screen} />            
      
    </Drawer.Navigator>
  )
}
