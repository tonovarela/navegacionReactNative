import { StackScreenProps } from "@react-navigation/stack"
import { Button, Text, View } from "react-native"
import { styles } from "../theme/appTheme"

interface Props extends StackScreenProps<any,any> {
  
}

export const Page1Screen = ({ navigation}:Props) => {
  
  return (
    <View style={styles.globalMargin}>
        <Text>Pagina 1</Text>
        <Button title="Pagina 2"  onPress={()=> navigation.navigate("Page2Screen")}></Button>
    </View>
  )
}
