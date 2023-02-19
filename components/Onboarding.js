import React from 'react'
import PrimaryButton from './lib/PrimaryButton'
import { StyleSheet, Text, View } from 'react-native'

export default function Onboarding({next}) {
  return (
    <View
      style={{
        padding:24,
        flex:1,
        justifyContent:'space-between'
      }}
    >
      <Text style={styles.heading1}>
        Welcome to{"\n"}
        Game Guardian
      </Text>
      <PrimaryButton    
        type={"primary"}
        onPress={next}
        title={"Next"}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  heading1:{
    fontWeight: "bold",
    letterSpacing: -1,
    fontSize: 30,
    color: "#000",
    marginBottom: 10,
  }
})
