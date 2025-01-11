import { Link } from "expo-router"
import { Pressable, Text } from "react-native"
import ScreenLayout from "../../components/ScreenLayout"
import { HomeIcon } from "../../components/Icons"

export default function About () {
  return (
    <ScreenLayout>
      <Link asChild href='/' style={{color: 'black'}}>
        <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, paddingTop: 10 }}>
          <HomeIcon />
          <Text style={{ color: 'white' }}>Ir al inicio</Text>
        </Pressable>
      </Link>
      <Text style={{ color: 'white' }}>Esta es la pagina abaout con mas texto</Text>
    </ScreenLayout>
  )
}