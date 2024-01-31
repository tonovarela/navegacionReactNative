
import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, View, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
import { StackNavitagor } from './StackNavitagor';
import { SettingsScreen } from '../screens';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();



export const MenuLateralPersonalizado = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInterno {...props} />}
      screenOptions={
        {
          drawerType: width >= 768 ? 'permanent' : 'front',
          headerShown: true,
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent'
          },
        }
      }
    >
      <Drawer.Screen name="StackNavigator" component={StackNavitagor} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}


const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg" }}
          style={styles.avatar}
        >
        </Image>
      </View>
      { /*   Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
          style={styles.menuBtn}>
          <Text style={styles.menuText} >Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuBtn}>
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )


}