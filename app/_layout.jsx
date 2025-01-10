import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"

export default function Layout () {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Slot />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight, //-> para añadir la separacion superior de la barra, pero no es tan recomendada
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
})
