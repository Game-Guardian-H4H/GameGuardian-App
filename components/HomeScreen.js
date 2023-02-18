import { Button, StyleSheet, Text } from "react-native";
import PrimaryButton from "./lib/PrimaryButton";
import { View } from "react-native";

export const HomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>
            Parental Control
          </Text>
          <Text style={styles.heading}>
            for Any Game
          </Text>
        </View>

        <PrimaryButton
          title={"Start Now"}
          type={'primary'}
          onPress={() =>
            navigation.navigate('Profile')
          }
        />
        <PrimaryButton
          title={"Start Now"}
          type={'secondary'}
          onPress={() =>
            navigation.navigate('Profile')
          }
        />
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "auto",
    backgroundColor: "white",
    padding:24
  },
  heading: {
    fontWeight:'bold',
    letterSpacing: -1,
    fontSize: 30,
    color: '#000',
  },
});