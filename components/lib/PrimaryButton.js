import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function PrimaryButton(props) {
  const { onPress, title = 'Save' } = props;
  let text;
  if (props.type == "primary") {
    text="light" 
  }else{
    text="dark" 
  }
  return (
    <Pressable style={styles[props.type]} onPress={onPress}>
      <Text style={styles[text]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primary: {
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
  light: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: -0.25,
    color: 'white',
  },
  dark: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: -0.25,
    color: 'black',
  },
});