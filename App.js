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
import Onboarding from './components/Onboarding';
import UserId from './components/UserId';

const Tab = createBottomTabNavigator();

// const Stack = createStackNavigator();


function App() {
  const [starting, setStarting] = React.useState(true);

  const [userId, setUserId] = React.useState('');


  return (
    <>
      {starting ?
        <Onboarding next={()=>setStarting(false)}/>:
        <>
          {
            !userId ?
            <UserId setUserId={setUserId}/>:
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
          }
        </>
      }
    </>
  );
}

export default App;