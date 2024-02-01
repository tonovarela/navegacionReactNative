import { StackScreenProps } from "@react-navigation/stack"
import { Button, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../theme/appTheme"

interface Props extends StackScreenProps<any, any> { }

export const Page1Screen = ({ navigation }: Props) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1</Text>
      <Button title="Pagina 2" onPress={() => navigation.navigate("Page2Screen")}></Button>
      <Text style={{ marginVertical: 10 }}>Navegar con argumentos</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ ...styles.botonGrande, backgroundColor: '#5856D6' }} onPress={() => navigation.navigate("PersonaScreen", { id: 1, nombre: "Juan" })}>
          <Text style={styles.btnGrandeTexto}>
            Juan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.botonGrande, backgroundColor: '#FF9427' }} onPress={() => navigation.navigate("PersonaScreen", { id: 2, nombre: "Maria" })}>
          <Text style={styles.btnGrandeTexto}>
            Maria
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}
