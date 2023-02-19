import React from 'react'
import { Text, View } from 'react-native'
import { Container } from './lib/Container'
import { Input } from './lib/Input';
import PrimaryButton from './lib/PrimaryButton';
import { headings } from './lib/headings';

export default function UserId({setUserId}) {
  const [userInput, setUserInput] = React.useState('');

  return (
    <View
      style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      <Container>
        <View
          style={{
            marginBottom:15,
            minWidth:300
          }}
        >
          <Text style={headings.heading1}>
            Welcome
          </Text>
          <Text>
            Insert your user ID.
          </Text>
        </View>
        <Input
          placeholder={"Input user ID"}
          onChange={setUserInput}
          value={userInput}
        />
        <PrimaryButton
          type={'filled'}
          title={'Get Started'}
          onPress={()=>setUserId(userInput)}
        />
      </Container>
    </View>
  )
};
