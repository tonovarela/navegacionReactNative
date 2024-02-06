import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralPersonalizado } from './src/navigator/MenuLateralPersonalizado';
import { Tabs } from './src/navigator/Tabs';
import { AuthContext, AuthProvider } from './src/context/Auth/AuthContext';
// import { StackNavitagor } from './src/navigator/StackNavitagor';
// import { MenuLateral } from './src/navigator/MenuLateral';


const App = () => {
  return (    
      <NavigationContainer >
        <AppState>
        <MenuLateralPersonalizado></MenuLateralPersonalizado>        
        </AppState>        
        {/* <Tabs></Tabs> */}
      </NavigationContainer>        
  )
}

const AppState = ({children}:{children:JSX.Element}) => {
    return (
        <AuthProvider>            
                {children}            
        </AuthProvider>
    )
}
export default App;

