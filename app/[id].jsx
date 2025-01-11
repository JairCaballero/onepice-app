import { Link } from "expo-router"
import { Pressable, ScrollView, Text } from "react-native"
import { HomeIcon } from "../components/Icons"
import ScreenLayout from "../components/ScreenLayout"

export default function About () {
  return (
    <ScreenLayout>
      <ScrollView>
        <Link asChild href='/' style={{color: 'black'}}>
          <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, paddingTop: 10 }}>
            <HomeIcon />
            <Text style={{ color: 'white' }}>Ir al inicio</Text>
          </Pressable>
        </Link>
        <Text style={{ color: 'white' }}>Esta es la pagina con id dinamico</Text>
      </ScrollView>
    </ScreenLayout>
  )
}