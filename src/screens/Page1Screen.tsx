import { StackScreenProps } from "@react-navigation/stack"
import { Button, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../theme/appTheme"
import  Icon from'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> { }

export const Page1Screen = ({ navigation }: Props) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1</Text>
      <Button title="Pagina 2" onPress={() => navigation.navigate("Page2Screen")}></Button>
      <Text style={{ marginVertical: 10 }}>Navegar con argumentos</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ ...styles.botonGrande, backgroundColor: '#5856D6' }} onPress={() => navigation.navigate("PersonaScreen", { id: 1, nombre: "Juan" })}>
        <View style={{ flexDirection: 'column', alignItems:'center'}}>
            <Icon name='man-outline' size={30} color={'white'} style={{marginRight:3}} ></Icon>
            <Text style={{...styles.btnGrandeTexto}}>
            Juan
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.botonGrande, backgroundColor: '#FF9427' }} onPress={() => navigation.navigate("PersonaScreen", { id: 2, nombre: "Maria" })}>
          <View style={{ flexDirection: 'column', alignItems:'center'}}>
            <Icon  name='woman-outline' size={30} color={'white'} style={{marginRight:3}} ></Icon>
            <Text style={{...styles.btnGrandeTexto}}>
            Maria
          </Text>
          </View>
        </TouchableOpacity>

      </View>

    </View>
  )
}
