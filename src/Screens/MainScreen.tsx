import React, {useEffect, useState} from "react"
import {SafeAreaView, StyleSheet, Text, View} from "react-native"
import {CardList} from "../Components/CardList"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {IData} from "../Interfaces"
import {Loader} from "../Components/Loader"

export const MainScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const [data, setData] = useState<IData[] | null>(null)
  const cardOpenHandler = (feed: IData) => navigation.navigate('Card', {feed})
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch("https://api.workoutme.app/api/feed/get/")
      .then(response => response.json())
      .then(json => setData(json))
      .catch((error) => {
        console.log(error)
      })
      // .finally(() => setIsLoading(false))
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [setData])

  if (isLoading) {
    return <View style={styles.emptyContainer}>
      <Loader color={'#334060'} size={'large'}/>
    </View>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.h1}>Activity feed</Text>
      </View>
      <CardList data={data} open={cardOpenHandler}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#eff4fd',
  },
  sectionContainer: {
    margin: 19,
  },
  h1: {
    fontSize: 38,
    fontWeight: '900',
    lineHeight: 42,
    color: '#334060',
    fontFamily: 'lato-black',
  },
  card: {
    borderRadius: 17,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardHeader: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
