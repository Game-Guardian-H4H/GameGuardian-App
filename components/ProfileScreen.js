import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./lib/PrimaryButton";
import { Container } from "./lib/Container";
import { Game } from "./lib/Game";
import { gamesData } from "../util/gamesDummyData";

export const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.heading1}>Welcome</Text>
      <View style={{marginBottom:10}}>
        <Container>
          <Text style={styles.subHeading}>Playing</Text>
          <Text style={styles.heading2}>Roblox</Text>
          <Text
            style={styles.text}
          >
            ... has been playing for ... minutes.
          </Text>
          <PrimaryButton
            title={"Pause Current Game"}
            type={'primary'}
            // onPress={() =>}
          />
        </Container>
      </View>
      <PrimaryButton
        title={"Add Game to Moniter"}
        type={'secondary'}
        // onPress={() =>}
      />
      {
        gamesData.map((game)=>(
          <Game
            key={game.name}
            title={game.name}
            description={game.description}
            src={{uri:game.src}}
          />
        ))
      }
    </View>
  )
  
};


const styles = StyleSheet.create({
  section: {
    flex: 1,
    // justifyContent:'space-between',
    backgroundColor: "white",
    padding:24
  },
  heading1: {
    fontWeight:'bold',
    letterSpacing: -1,
    fontSize: 30,
    color: '#000',
    marginBottom:10
  },
  subHeading:{
    fontWeight:'bold',
    letterSpacing: -0.5,
    fontSize: 13,
    color: '#A9A9A9',
    marginBottom:10
  },
  heading2: {
    fontWeight:'bold',
    letterSpacing: -0.5,
    fontSize: 20,
    color: '#000',
    marginBottom:10
  },
  text:{
    marginBottom:10
  },
});