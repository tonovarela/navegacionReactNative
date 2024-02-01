
import { RouteProp } from '@react-navigation/native';
import { colores } from "../theme/appTheme";
import { Text } from "react-native";
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs';


export type TabScreenList = {
    Tab1Screen: JSX.Element
    Tab2Screen: JSX.Element;
    StackNavigator: JSX.Element;
};

type ScreenTabsOptions = {
    route: RouteProp<TabScreenList,
        keyof TabScreenList>, navigation: any
}

type TabBarOptions = {
    focused: boolean,
    color: string,
    size?: number
}



const iconSetting = (
    route: RouteProp<TabScreenList>,
    { color }: TabBarOptions) => {
    let iconName: string = '';    
    switch (route.name) {
        case 'Tab1Screen':
            iconName = 'T1';
            break;
        case 'Tab2Screen':
            iconName = 'T2';
            break;
        case 'StackNavigator':
            iconName = 'ST';
            break;
        default:
            iconName = '--';
            break;
    }
    return <Text style={{ color, fontWeight: '800' }}> {iconName} </Text>;
};
export const screenOptionsMaterial = (({ route }: ScreenTabsOptions): MaterialBottomTabNavigationOptions => {
    return {
        tabBarIcon: ({ focused, color }) => iconSetting(route, { focused, color })
    }

});

export const screenOptionsCupertino = ({ route }: ScreenTabsOptions): BottomTabNavigationOptions => {
    return {
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
            borderTopColor: colores.primary,
            borderRadius: 10,
            borderTopWidth: 0 /* 10 y hace un borde superior */,
            backgroundColor: 'white',
            elevation: 0,
        },
        tabBarLabelStyle: {
            fontSize: 17,
        },
        tabBarIcon: (props: TabBarOptions) => iconSetting(route, props),
    }
}
