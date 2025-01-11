/* eslint-disable prettier/prettier */
import { Link } from "expo-router"
import { useEffect, useRef } from "react"
import { StyleSheet, View, Text, Image, Animated } from "react-native"

export const Card = ({item}) => {
  return (
    <Link asChild href={{
      pathname: '/[id]',
      params: { id: item.id }
    }}>
      <View style={styles.card}>
        <Image source={{ uri: item.filename }} style={styles.image} />
        <Text style={styles.name}>{item.roman_name}</Text>
        <Text style={styles.description}>{item.description}
        </Text>
        <Text style={styles.type}>Tipo: {item.type || "No Registrado"}</Text>
      </View>
    </Link>
  )
}

export const AnimatedCard = ({ item, index }) => {
  const opacity = useRef( new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing( opacity, {
      toValue: 1,
      duration: 200,
      delay: index * 200,
      useNativeDriver: true
    }).start()
  }, [opacity, index])

  return(
    <Animated.View style={{ opacity }} >
      <Card item={item} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  type: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
    color: "green",
  },
})
