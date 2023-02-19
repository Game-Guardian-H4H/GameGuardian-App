import React from 'react'
import { StyleSheet, View } from 'react-native'

export const ModalContainer = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      }}
    >
      <View
        style={{
          minWidth:360,
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
        {children}
      </View>
    </View>
  )
}