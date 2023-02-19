import { Button, StyleSheet, Text } from "react-native";
import PrimaryButton from "./lib/PrimaryButton";
import { View } from "react-native";

export const OnboardingScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.section}>
        <View>
          <Text style={styles.heading}>
            Parental Control{"\n"}
            for Any Game
          </Text>
          <Text style={styles.info}>
            ・Parental control for Roblox Experience.{"\n"}
            ・View status of games being played.{"\n"}
            ・Pause game play.{"\n"}
          </Text>
        </View>


        <View>
          <PrimaryButton
            title={"Getting Started"}
            type={'primary'}
            onPress={() =>
              navigation.replace("Profile")
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
  info:{
    marginTop:15,
    fontSize:15
  }
});