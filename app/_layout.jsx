import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function Layout () {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#000"  />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitle: '',
          headerLeft: () => <Text style={styles.header}>Akuma No Mi - One Piece</Text>,
          headerRight: () => <Text>Info</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight, //-> para añadir la separacion superior de la barra, pero no es tan recomendada
  },
  header: {
    color: 'white',
    marginBottom: 10,
    padding: 5,
    fontSize: 24,
    fontWeight: 'bold'
  }
})
