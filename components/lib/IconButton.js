import React from 'react'
import { Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export const IconButton = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{
        // backgroundColor: "white",
        borderWidth: 1,
        borderColor:'#F0F0F0',
        shadowColor: '#BEBEBE',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius:15,
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