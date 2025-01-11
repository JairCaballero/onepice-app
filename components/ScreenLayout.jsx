import { View } from "react-native"

export default function ScreenLayout({children}) {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: 10, paddingTop: 5 }}>
      {children}
    </View>
  )
}