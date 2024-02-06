import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ContactScreen = () => {
  const {top:paddingTop,left} =useSafeAreaInsets();
  return (
    <View style={{paddingTop,paddingLeft:left}}>
        <Text >ContactScreen</Text>
    </View>
  )
}
