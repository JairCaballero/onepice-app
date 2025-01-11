import { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import { ActivityIndicator, FlatList, ScrollView } from "react-native"
import { AnimatedCard } from '../../components/GameCard'
import ScreenLayout from '../../components/ScreenLayout'
import { fetchData } from '../../lib/api'

export default function Page() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData().then((data) => {
      setData(data)
    })
  }, [])

  return (
    <ScreenLayout>
      <ScrollView>
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
      </ScrollView>
    </ScreenLayout>
  )
}