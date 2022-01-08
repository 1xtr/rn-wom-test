import React from "react"
import {ActivityIndicator, Text, View} from "react-native"
import {LoaderProps} from "../Interfaces"

export const Loader: React.FC<LoaderProps> = ({color, size}) => {
  return (
    <View>
      <Text>Loading...</Text>
      <ActivityIndicator color={color} size={size} />
    </View>
  )
}
