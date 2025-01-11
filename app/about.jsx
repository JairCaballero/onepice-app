import { Link } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { HomeIcon } from "../components/Icons"

export default function About () {
  return (
    <View>
      <Link asChild href='/' style={{color: 'white'}}>
        <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 10 }}>
          <HomeIcon />
          <Text style={{ color: 'white' }}>Ir al inicio</Text>
        </Pressable>
      </Link>
      <Text style={{ color: 'white' }}>Esta es la pagina abaout</Text>
    </View>
  )
}