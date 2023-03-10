import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ProfileScreen } from "./components/ProfileScreen";
import { HowToScreen } from "./components/HowToScreen";
import Icon from "react-native-vector-icons/Feather";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Onboarding from "./components/Onboarding";
import UserId from "./components/UserId";

const Tab = createBottomTabNavigator();

function App() {
  const [starting, setStarting] = React.useState(true);
  const [userId, setUserId] = React.useState("");

  const getProfile = () => <ProfileScreen userId={userId} />;

  return (
    <>
      {starting ? (
        <Onboarding next={() => setStarting(false)} />
      ) : (
        <>
          {!userId ? (
            <UserId setUserId={setUserId} />
          ) : (
            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen
                  name="Profile"
                  component={getProfile}
                  options={{
                    tabBarIcon: ({ color }) => (
                      <Icon name="user" size={25} color={color} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="How To"
                  component={HowToScreen}
                  options={{
                    tabBarIcon: ({ color }) => (
                      <Icon name="file" size={25} color={color} />
                    ),
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          )}
        </>
      )}
    </>
  );
}

export default App;
