import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Main from "./components/Main"

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
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
