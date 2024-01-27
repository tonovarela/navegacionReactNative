import { Button, Text, View } from "react-native"
import { styles } from "../theme/appTheme"
import { StackScreenProps } from "@react-navigation/stack"
import { useEffect } from "react"
import { RootStackParams } from "../navigator/StackNavitagor"



interface Props extends StackScreenProps<RootStackParams,'PersonaScreen' > {}

export const PersonaScreen = ({ route, navigation }: Props) => {
  const params = route.params ;
  useEffect(() => {
    navigation.setOptions({      
      title: params.nombre
    })
  }, [])
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {
          JSON.stringify(params, null, 3)
        }
      </Text>
      <Button title="Atras" onPress={()=>{navigation.goBack()}}></Button>


    </View>
  )
}
