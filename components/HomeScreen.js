import { Button, StyleSheet } from "react-native";
import { buttonStyle } from "../util/StyleSheet";
import PrimaryButton from "./lib/PrimaryButton";

export const HomeScreen = ({navigation}) => {
  return (
    <>
      <PrimaryButton
        title={"Bruh"}
      />
      {/* <Button
        title="Go to profile"
        onPress={() =>
          navigation.navigate('Profile')
        }
      /> */}
    </>
  );
};