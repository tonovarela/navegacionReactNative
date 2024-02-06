
import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, View, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
// import { StackNavitagor } from './StackNavitagor';
// import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../screens';
import { styles, colores } from '../theme/appTheme';

import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Drawer.Screen name="Tabs" options={
        {
          headerShown: false
                   
        }
      } component={Tabs} />
      <Drawer.Screen name="SettingsScreen"  options={{title:'Settings'}} component={SettingsScreen} />
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
          onPress={() => navigation.navigate('Tabs')}
          style={styles.menuBtn}>
          <View style={styles.itemMenu}>
            <Icon name="compass" size={15} style={styles.iconMenu} color={colores.primary} />
            <Text style={styles.menuText} >Navegacion</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuBtn}>
          <View style={styles.itemMenu}>
            <Icon name="build" size={15} style={styles.iconMenu} color={colores.primary} />
            <Text style={styles.menuText}>Ajustes</Text>
          </View>

        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )


}
