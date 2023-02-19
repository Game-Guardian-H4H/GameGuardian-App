import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Align } from './Align';

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
      <Align>
        {props.name &&        
          <Icon
            name={props.name}
            style={styles[textColor]}
            size={20}
            color="black"
          />
        }
        <Text style={[styles.text, styles[textColor]]}>
          {props.title}
        </Text>
      </Align>
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