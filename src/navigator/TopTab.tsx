
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumScreen, ChatScreen, ContactScreen } from '../screens';

const Tab = createMaterialTopTabNavigator();

import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';

LogBox.ignoreLogs(['Sending'])

export const  TopTab = ()=> {

    const {top:paddingTop} =useSafeAreaInsets();
  return (
    <Tab.Navigator
    style={{paddingTop}}
    sceneContainerStyle={{
        backgroundColor: 'white',        
    }}
   
    screenOptions={({route}) => ({
        tabBarShowIcon: true,     
        //tabBarShowLabel:false,   
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarActiveTintColor: 'black',        
        tabBarPressColor: colores.primary,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          paddingVertical: 12,
          backgroundColor: 'white'
        },
        tabBarIconStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        tabBarIcon: ({focused, color}) => {            
          let iconName: string = '';          
          switch (route.name) {
              case 'ChatScreen':
              iconName = 'Ch'
              break; 
              case 'ContactScreen':
              iconName = 'Co'
              break;
 
              case 'AlbumScreen':
              iconName = 'Al'
              break;
          }
          return <Text style={{color}}>{iconName}</Text>
        }
      })}
    >
      <Tab.Screen name="ChatScreen" options={{title:"Chat"}} component={ChatScreen} />
      <Tab.Screen name="ContactScreen" options={{title:"Contacts"}}  component={ContactScreen} />
      <Tab.Screen name="AlbumScreen" options={{title:"Album"}} component={AlbumScreen} />
    </Tab.Navigator>
  );
}