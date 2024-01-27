import { StackScreenProps } from "@react-navigation/stack"
import { Button, Text, View } from "react-native"
import { styles } from "../theme/appTheme"
interface Props  extends StackScreenProps<any,any>{

}

export const Page3Screen = ({navigation}:Props) => {
  return (
    <View style ={styles.globalMargin}>
        <Text  style={styles.title}>Pagina 3</Text>
        {/* <Button title="Regresar" onPress={ ()=>navigation.pop()}></Button> */}
        {/* <Button title="Ir al Home" onPress={ ()=>navigation.popToTop()}></Button> */}
    </View>
  )
}
