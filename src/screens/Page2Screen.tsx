import { useNavigation } from '@react-navigation/core'
import { Button, Text, View } from "react-native"
import { styles } from "../theme/appTheme"




export const Page2Screen = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 2</Text>
      <Button title="Ir pagina 3" onPress={ ()=>navigator.navigate("Page3Screen" as never)}></Button>
    </View>
  )
}
