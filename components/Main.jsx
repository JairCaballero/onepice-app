/* eslint-disable prettier/prettier */
import { View, ActivityIndicator, FlatList, Text } from "react-native"
import { useEffect, useState } from "react"
import { fetchData } from "../lib/api"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { AnimatedCard } from "./GameCard"
import { Link } from "expo-router"

function Main() {
  const [data, setData] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    fetchData().then((data) => {
      setData(data)
    })
  }, [])

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View>
        <Text style={{ color: 'white', marginBottom: 10, padding: 5, fontSize: 24, fontWeight: 'bold' }}>Akuma No Mi - One Piece</Text>
      </View>
      <Link href="/about" style={{color: 'white'}}>
        Ir a Abaout
      </Link>
      {data.length  === 0 ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={data => data.id}
          renderItem={({item, index}) => <AnimatedCard item={item} index={index} />}
        />
      )}
    </View>
  )
}

export default Main