import { View, Text } from 'react-native'
import React from 'react'
import Styles from '../styles'
import { useTheme } from '../context/useTheme'


export default function Home() {
  const {isDarkMode} = useTheme()
  console.log(isDarkMode)
  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
    </View>
  )
}