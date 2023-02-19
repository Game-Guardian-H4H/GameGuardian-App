import React from 'react'
import { View } from 'react-native'

export const Container = ({children}) => {
  return (
    <View
      style={{
        minWidth:350,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor:'#F0F0F0',
        shadowColor: '#BEBEBE',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius:20,
        padding:20,
      }}
    >
      {children}
    </View>
  )
}