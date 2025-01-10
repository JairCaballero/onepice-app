import { Link } from "expo-router"
import { Text, View } from "react-native"

export default function About () {
  return (
    <View>
      <Link href='/about' style={{color: 'white'}}>
        Ir a Abaout
      </Link>
      <Text>Esta es la pagina abaout</Text>
    </View>
  )
}