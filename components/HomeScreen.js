import { Button, StyleSheet, Text } from "react-native";
import PrimaryButton from "./lib/PrimaryButton";
import { View } from "react-native";

export const HomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.section}>
        <View>
          <Text style={styles.heading}>
            Parental Control{"\n"}
            for Any Game
          </Text>
        </View>


        <View>
          <PrimaryButton
            title={"Getting Started"}
            type={'primary'}
            onPress={() =>
              navigation.navigate('Profile')
            }
          />
          <PrimaryButton
            title={"How to use"}
            type={'secondary'}
            onPress={() =>
              navigation.navigate('Profile')
            }
          />
        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent:'space-between',
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