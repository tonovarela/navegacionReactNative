import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'

import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/Auth/AuthContext';

export const ContactScreen = () => {
  const { signIn, logOut: signOut,authState } = useContext(AuthContext);
   const {username} = authState
  return (
    
    <View style={styles.globalMargin}>
      <Text style={styles.title} >ContactScreen</Text>
      {
        !authState.isLogged ?<Button title='Login' onPress={signIn}></Button>
        :<Button title='LogOut' onPress={signOut} ></Button>
      }
      {
        <Text>{username || 'No user'}</Text>
      }

    </View>
  )
}
