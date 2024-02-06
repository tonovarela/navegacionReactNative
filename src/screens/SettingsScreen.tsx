
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth/AuthContext';
import { TouchableIcon } from '../componentes/TouchableIcon';

export const SettingsScreen = () => {
    const insets = useSafeAreaInsets();
    const { authState } = useContext(AuthContext);    
    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20,
        }}>
            <Text style={styles.title}>Settings</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>

            {authState.favoriteIcon && (<TouchableIcon iconName={authState.favoriteIcon}></TouchableIcon>)}


        </View>
    )
}
