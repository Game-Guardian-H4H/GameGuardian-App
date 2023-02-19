import React from 'react'
import { Pressable, View } from 'react-native'

export const ModalContainer = (props) => {
  return (
    <Pressable
      onPress={props.closeModal}
      style={{
        flex: 1,
        backgroundColor:'rgba(255,255,255, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      }}
    >
      <View
        style={{
          maxWidth:360,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 24,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 40,
          borderWidth: 1,
          borderColor:'#F0F0F0',
          elevation: 5,
        }}
      >
        {props.children}
      </View>
    </Pressable>
  )
}