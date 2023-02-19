import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from './components/ProfileScreen';
import { HowToScreen } from './components/HowToScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="How To" component={HowToScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;