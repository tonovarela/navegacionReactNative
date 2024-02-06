import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabScreenList, screenOptionsCupertino, screenOptionsMaterial } from '../conf/tabs.conf';
import { Tab1Screen, Tab2Screen } from '../screens';
import { StackNavitagor } from './StackNavitagor';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import { colores } from '../theme/appTheme';
import { TopTab } from './TopTab';
import  Icon from'react-native-vector-icons/Ionicons';


const TabsMaterial = () => {
    const TabMaterial = createMaterialBottomTabNavigator<TabScreenList>();
    return (
        <TabMaterial.Navigator
            sceneAnimationEnabled={false}
            barStyle={{ backgroundColor: colores.primary, }}
            screenOptions={screenOptionsMaterial}
        >
            <TabMaterial.Screen
                name="Tab1Screen"
                options={{ title: 'Tab1',
                tabBarIcon: ({ focused, color }) => {
                    return <Text>
                        <Icon name='apps-outline' size={20} color={color}></Icon>
                    </Text>
                }
            }}

                component={Tab1Screen}
            />
            <TabMaterial.Screen
                name="Tab2Screen"
                options={{ title: 'Tab2',
                tabBarIcon: ({ focused, color }) => {
                    return <Text>
                        <Icon name='albums-outline' size={20} color={color}></Icon>
                    </Text>
                }
             }}
                component={TopTab}
            />
            <TabMaterial.Screen
                name="StackNavigator"
                options={{ title: 'StackNavigator',
                tabBarIcon: ({ focused, color }) => {
                    return <Text>
                        <Icon name='aperture-outline' size={20} color={color}></Icon>
                    </Text>
                }
             }}
                component={StackNavitagor}
            />
        </TabMaterial.Navigator>
    )
}

const TabsCupertino = () => {    
    const TabCupertino = createBottomTabNavigator<TabScreenList>();
    return (
        <TabCupertino.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',

            }}
            screenOptions={screenOptionsCupertino}
        >
            <TabCupertino.Screen
                name="Tab1Screen"
                options={{ title: 'Tab1' }}
                component={Tab1Screen}
            />
            <TabCupertino.Screen
                name="Tab2Screen"
                options={{ title: 'Tab2' }}
                component={TopTab}
            />
            <TabCupertino.Screen
                name="StackNavigator"
                options={{ title: 'Stack' }}
                component={StackNavitagor}
            />
        </TabCupertino.Navigator>
    );
}


export const Tabs = () => {
    return Platform.OS === 'ios' ? TabsCupertino() : TabsMaterial();
};