import React from 'react'
import { TextInput } from 'react-native'

export const Input = (props) => {
  return (
    <TextInput
      style={{
        height: 40,
        borderWidth: 1,
        borderColor:'#E8E8E8',
        backgroundColor:'#F8F8F8',
        borderRadius:10,
        padding: 10,
      }}
      onChangeText={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      placeholderTextColor="#808080"
      keyboardType="text"
    />
  )
}