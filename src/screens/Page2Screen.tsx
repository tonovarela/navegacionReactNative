import { useNavigation } from '@react-navigation/core'
import { Button, Text, View } from "react-native"
import { styles } from "../theme/appTheme"
import { useEffect } from 'react';




export const Page2Screen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({headerTitle: 'Pagina 1',headerBackTitle:"Regresar"});

  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>
      <Button title="Ir pagina 3" onPress={() => navigator.navigate("Page3Screen" as never)}></Button>
    </View>
  )
}
