import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./lib/PrimaryButton";
import { Container } from "./lib/Container";
import { Game } from "./lib/Game";
import { gamesData } from "../util/gamesDummyData";
import { useEffect, useState } from "react";
import { ModalContainer } from "./lib/ModalContainer";
import { Align } from "./lib/Align";
import { IconButton } from "./lib/IconButton";
import { Input } from "./lib/Input";
import { END_POINT_BASE } from "./utlis/utils";
import AnimatedLoader from "react-native-animated-loader";

export const ProfileScreen = ({ navigation }) => {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const [alertMessage, setAlertMessage] = useState(false);


  const [loading, setLoading] = useState(false);
  const [paused, setPaused] = useState(false);
  const callFlaskAPI = async () => {
    setLoading(true);
    try {
      fetch(`${END_POINT_BASE}/api/getPauseState/1`)
        .then((response) => {
          alert(response);
          const { data } = response;
          if (response.ok) {
            setAlertMessage(data);
            setPaused(true);
            setLoading(false);
          } else {
            console.log("Request failed");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [message, setMessage] = useState("");

  return (
    <View style={styles.section}>
      <View
        style={{
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <Container>
          {!paused && <Text style={styles.subHeading}>Currently Playing</Text>}
          <Text style={styles.heading2}>Roblox</Text>
          <Text style={styles.text}>... has been playing for ... minutes.</Text>
          <PrimaryButton
            name={"pause"}
            title={paused ? "Paused" : "Pause Current Game"}
            type={paused ? "secondary" : "primary"}
            onPress={() => setConfirmModalVisible(true)}
          />
        </Container>
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={styles.heading2}>Game History</Text>
        {gamesData.map((game) => (
          <Game
            key={game.name}
            title={game.name}
            description={game.description}
            src={{ uri: game.src }}
          />
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setConfirmModalVisible(!confirmModalVisible);
        }}
      >
        <ModalContainer
          closeModal={() => setConfirmModalVisible(!confirmModalVisible)}
        >
          {paused ? (
            <View>
              <Text style={styles.heading1}>Warning</Text>
              <Text style={styles.text}>
                Are you sure you want to pause the current game play? Note that
                changes will take time to be put in effect.
              </Text>
              <PrimaryButton
                title={"Unpause"}
                type={"primary"}
                onPress={() => {
                  setPaused(false);
                  alert("Unpausing...");
                }}
              />
              <PrimaryButton
                title={"Force Exit"}
                type={"filled"}
                onPress={() => alert("Do something")}
              />
            </View>
          ) : (
            <View>
              <Text style={styles.heading1}>Warning</Text>
              <Text style={styles.text}>
                Are you sure you want to pause the current game play? Note that
                changes will take time to be put in effect.
              </Text>
              <Input
                placeholder={"Input a message"}
                onChange={setMessage}
                value={message}
              />
              <PrimaryButton
                title={"Pause Current Game"}
                type={"primary"}
                onPress={() => callFlaskAPI()}
              />
              <AnimatedLoader
                visible={loading}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.lottie}
                speed={1}>
                <Text style={[styles.heading3, {marginTop:20}]}>Loading...</Text>
              </AnimatedLoader>
            </View>
          )}
        </ModalContainer>
      </Modal>
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

  lottie: {
    width: 100,
    height: 100
  }
});
