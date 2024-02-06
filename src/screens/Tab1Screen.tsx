import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import  Icon from'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen')
  }
    , [])
  const insets = useSafeAreaInsets();
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top,
    }}>
      <Text style={styles.title}>Icons</Text>
      {/* <Text>
        <Icon name='airplane-outline' size={80} color="#900"></Icon>
      </Text> */}
    </View>
  )
}
