import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabScreenList, screenOptionsCupertino, screenOptionsMaterial } from '../conf/tabs.conf';
import { Tab1Screen, Tab2Screen } from '../screens';
import { StackNavitagor } from './StackNavitagor';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';
import { colores } from '../theme/appTheme';
import { TopTab } from './TopTab';


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
                options={{ title: 'Tab1' }}
                component={Tab1Screen}
            />
            <TabMaterial.Screen
                name="Tab2Screen"
                options={{ title: 'Tab2' }}
                component={TopTab}
            />
            <TabMaterial.Screen
                name="StackNavigator"
                options={{ title: 'StackNavigator' }}
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