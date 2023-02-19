import React from 'react'
import { View } from 'react-native'

export const Align = (props) => {
  return (
    <View
      style={{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:props.justifyContent,
        maxHeight:50
      }}
    >
      {props.children}
    </View>
  )
}