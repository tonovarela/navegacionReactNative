import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralPersonalizado } from './src/navigator/MenuLateralPersonalizado';
// import { StackNavitagor } from './src/navigator/StackNavitagor';
// import { MenuLateral } from './src/navigator/MenuLateral';


const App = () => {
  return (    
      <NavigationContainer >
        <MenuLateralPersonalizado></MenuLateralPersonalizado>        
      </NavigationContainer>    
  )
}
export default App;

