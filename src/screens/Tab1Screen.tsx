import React, { useContext } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {  Text, View } from 'react-native'
import {  styles } from '../theme/appTheme';
import { TouchableIcon } from '../componentes/TouchableIcon';
import { AuthContext } from '../context/Auth/AuthContext';

export const Tab1Screen = () => {  
  const insets = useSafeAreaInsets();
   const {authState}= useContext(AuthContext)
   const {favoriteIcon} = authState;
  
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top,
    }}>
      <Text style={styles.title}>Icons</Text>
      
      <Text style={{alignSelf:'center'}}>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>

      <Text style={styles.title}>{favoriteIcon || 'No icon favorite'}</Text>
      
      



      





    </View>
  )
}
