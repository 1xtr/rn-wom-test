import React from "react"
import {ScrollView, StyleSheet, Text, View} from "react-native"
import {ICardListProps, IData} from "../Interfaces"
import {WOACard} from "./Card"

export const CardList: React.FC<ICardListProps> = ({data, open}) => {
  if (!data?.length) {
    return <View style={styles.emptyContainer}>
      <Text>No data, sorry...</Text>
    </View>
  }
  return (
    <ScrollView>
      {
        data
          .map((card: IData) => <WOACard data={card} key={card.id} open={open} type={'small'}/>)
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    backgroundColor: '#eff4fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
