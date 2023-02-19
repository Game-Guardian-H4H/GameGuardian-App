import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
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
    <View style={styles.section}>
      <Text style={styles.heading1}>Get Started</Text>
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
        </Container>
      </View>

      <Text style={styles.heading1}>How To Use</Text>
      <View
        style={{
          marginBottom: 25,
        }}
      >
        <Container>
          <Text style={styles.heading3}>Simple steps on how to get started</Text>
          <Text style={styles.text}>
            1. 
          </Text>
          <Text style={styles.text}>
            2. 
          </Text>
          <Text style={styles.text}>
            3. 
          </Text>
        </Container>
      </View>

    </View>
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
