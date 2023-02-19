import React from 'react'
import { Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export const IconButton = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{
        width:40,
        height:40,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:5,
      }}
    >
      <Icon
        name={props.name}
        size={20}
        color="black"
      />
    </Pressable>
  )
}