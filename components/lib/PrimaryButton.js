import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { Align } from './Align';
import Icon from 'react-native-vector-icons/Feather';


export default function PrimaryButton(props) {
  let textColor;
  if (props.type == "secondary") {
    textColor="dark"
  }else{
    textColor="light" 
  }
  return (
    <Pressable
      style={styles[props.type]}
      onPress={props.onPress}
    >
      <Text style={[styles.text, styles[textColor]]}>
        {props.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primary: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor:'#FC4E4E',
    borderRadius:12,

    marginTop:7
  },
  secondary: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor:'#F0F0F0',
    borderRadius:12,

    marginTop:7
  },
  filled: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor:'black',
    borderRadius:12,

    marginTop:7
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: -0.25,
  },
  light: {
    color: 'white',
  },
  dark: {
    color: 'black',
  },
});