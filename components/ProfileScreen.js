import { Modal, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./lib/PrimaryButton";
import { Container } from "./lib/Container";
import { Game } from "./lib/Game";
import { gamesData } from "../util/gamesDummyData";
import { useState } from "react";
import { ModalContainer } from "./lib/ModalContainer";
import { Input } from "./lib/Input";
import { END_POINT_BASE } from "./utlis/utils";
import AnimatedLoader from "react-native-animated-loader";
import { headings } from "./lib/headings";

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
          {!paused && <Text style={headings.subHeading}>Currently Playing</Text>}
          <Text style={headings.heading2}>Roblox</Text>
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
        <Text style={headings.heading2}>Game History</Text>
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
              <Text style={headings.heading1}>Warning</Text>
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
              <Text style={headings.heading1}>Warning</Text>
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
                <Text style={[headings.heading3, {marginTop:20}]}>Loading</Text>
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
    padding: 24,
  },
  text: {
    marginBottom: 10,
  },
  lottie: {
    width: 50,
    height: 50
  }
});
