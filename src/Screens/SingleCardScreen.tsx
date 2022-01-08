import React from 'react'
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {WOACard} from "../Components/Card";
import {IData} from "../Interfaces";
import {SafeAreaView, StyleSheet} from "react-native";

export const SingleCardScreen = ({route}: NativeStackScreenProps<any>) => {
  const dataD: IData = route.params?.feed
  return (
    <SafeAreaView style={styles.container}>
      <WOACard data={dataD} open={() => {
      }} type={'big'}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#eff4fd',
  },

});
