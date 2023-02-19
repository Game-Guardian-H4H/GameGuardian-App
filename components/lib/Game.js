import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const Game = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={props.src}
      />
      <View>
        <Text>{props.title}</Text>
        <Text>{props.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "white",
    borderWidth: 1,
    borderColor:'#F0F0F0',
    borderRadius:20,
    padding:20,
    marginBottom:10,
    flexDirection:'row',
  },
  logo:{
    width: 40,
    height: 40,
    marginRight:15,
    borderRadius:10,
  }
})