import { Button, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./lib/PrimaryButton";
import { Container } from "./lib/Container";
import { Game } from "./lib/Game";
import { gamesData } from "../util/gamesDummyData";
import { useState } from "react";
import { ModalContainer } from "./lib/ModalContainer";
import { Align } from "./lib/Align";
import { IconButton } from "./lib/IconButton";
import { Input } from "./lib/Input";

export const HowToScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.heading2}>Get Started</Text>
          <View
            style={{
              marginBottom: 25,
            }}
          >
            <Container>
              <Text style={styles.heading3}>Parental Control for Any Game</Text>
              <Text style={styles.info}>
                ・Parental control for Roblox Experience.{"\n"}
                ・View status of games being played.{"\n"}
                ・Pause game play.{"\n"}
              </Text>

              <Text style={styles.heading3}>About</Text>
              <Text>
                Game Guardian is an application that allows parents to manage and control their children's gaming activities. Here are the steps to use the app
              </Text>
            </Container>
          </View>

          <Text style={styles.heading2}>Basics</Text>
          <View
            style={{
              marginBottom: 25,
            }}
          >
            <Container>
              <Text style={styles.heading3}>Pausing</Text>
              <Text style={styles.text}>
                To pause your child's gaming session, simply click on the "Pause Current Game" button in the app. This will stop their game (with a little bit of delay) and they will be unable to play until you unpause it.
              </Text>
              <Text style={styles.heading3}>Analytics</Text>
              <Text style={styles.text}>
                You can also view reports on your child's gaming activities, including the games they have played, how long their sessions have been, as well as a history of what games they have played.
              </Text>
            </Container>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    // justifyContent:'space-between',
    // backgroundColor: "white",
    padding: 24,
  },
  heading1: {
    fontWeight: "bold",
    letterSpacing: -1,
    fontSize: 30,
    color: "#000",
    marginBottom: 10,
  },
  subHeading: {
    fontWeight: "bold",
    letterSpacing: -0.5,
    fontSize: 13,
    color: "#A9A9A9",
    marginBottom: 10,
  },
  heading2: {
    fontWeight: "bold",
    letterSpacing: -0.5,
    fontSize: 20,
    color: "#000",
    marginBottom: 10,
  },
  heading3: {
    fontWeight: "bold",
    letterSpacing: -0.5,
    fontSize: 17,
    color: "#000",
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
  },
});
