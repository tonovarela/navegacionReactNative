import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralPersonalizado } from './src/navigator/MenuLateralPersonalizado';
import { Tabs } from './src/navigator/Tabs';
// import { StackNavitagor } from './src/navigator/StackNavitagor';
// import { MenuLateral } from './src/navigator/MenuLateral';


const App = () => {
  return (    
      <NavigationContainer >
        <MenuLateralPersonalizado></MenuLateralPersonalizado>        
        {/* <Tabs></Tabs> */}
      </NavigationContainer>    
  )
}
export default App;

