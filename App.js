import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from './components/ProfileScreen';
import { HowToScreen } from './components/HowToScreen';
import PrimaryButton from './components/lib/PrimaryButton';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './components/lib/Container';
import { Input } from './components/lib/Input';
import Icon from 'react-native-vector-icons/Feather';

// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// const Stack = createStackNavigator();


function App() {
  const [userId, setUserId] = React.useState('');
  const [userInput, setUserInput] = React.useState('');

  return (
    <>
      {
        !userId ?

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
              <Text style={styles.heading1}>
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
        </View>:
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon:({color})=>(
                  <Icon
                    name="user"
                    size={25}
                    color={color}
                  />
                )
              }}
            />
            <Tab.Screen
              name="How To"
              component={HowToScreen}
              options={{
                tabBarIcon:({color})=>(
                  <Icon
                    name="file"
                    size={25}
                    color={color}
                  />
                )
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>

        //   <Stack.Navigator>
        //     <Stack.Screen
        //       name="Profile"
        //       component={ProfileScreen}
        //       // options={{
        //       //   headerRight: () => (
        //       //     <IconButton
        //       //       onPress={() => navigation.navigate('How To')}
        //       //       name={"info"}
        //       //     />
        //       //   ),
        //       // }}
        //     />
        //     <Stack.Screen name="How To" component={HowToScreen} />
        //   </Stack.Navigator>
      }
    </>
  );
}

const styles = StyleSheet.create({
  heading1: {
    fontWeight: "bold",
    letterSpacing: -1,
    fontSize: 30,
    color: "#000",
    marginBottom: 10,
  },
})

export default App;