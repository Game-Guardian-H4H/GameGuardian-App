import { Modal, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./lib/PrimaryButton";
import { Container } from "./lib/Container";
import { Game } from "./lib/Game";
import { gamesData } from "../util/gamesDummyData";
import { useEffect, useState } from "react";
import { ModalContainer } from "./lib/ModalContainer";
import { Input } from "./lib/Input";
import { END_POINT_BASE } from "./utlis/utils";
import AnimatedLoader from "react-native-animated-loader";
import { headings } from "./lib/headings";

export const ProfileScreen = ({ navigation, userId }) => {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [paused, setPaused] = useState(false);
  const [message, setMessage] = useState("");
  const [time, setTime] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`${END_POINT_BASE}/users/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log("Response data:", data, data.maxTimeAllowed);
        setPaused(data.isPaused);
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [userId, paused]);

  const callPauseAPI = () => {
    setLoading(true);
    try {
      fetch(`${END_POINT_BASE}/users/${userId}/pause`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isPaused: true,
          pauseMessage: message,
        }),
      })
        .then((response) => {
          setLoading(false);
          setConfirmModalVisible(false);
          alert("Modal has been closed.");
          setPaused(true);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const callUnPauseAPI = () => {
    setLoading(true);
    try {
      fetch(`${END_POINT_BASE}/users/${userId}/pause`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isPaused: false,
          pauseMessage: "",
        }),
      })
        .then((response) => {
          setLoading(false);
          setConfirmModalVisible(false);
          setPaused(false);
          setMessage("");
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const callModifyMaxTime = () => {
    setLoading(true);
    try {
      fetch(`${END_POINT_BASE}/users/${userId}/maxTimeAllowed`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          maxTimeAllowed: time,
        }),
      })
        .then((response) => {
          setLoading(false);
          setTimeModalVisible(false);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.section}>
      <View
        style={{
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <Container>
          {!paused && (
            <Text style={headings.subHeading}>Currently Playing</Text>
          )}
          <Text style={headings.heading2}>Roblox</Text>
          <Text style={styles.text}>
            Hack4SegFault has been playing for {user.currentTime} minutes for
            today.
          </Text>
          <Text style={styles.text}>
            Max allowed time {user.maxTimeAllowed}
          </Text>
          <PrimaryButton
            name={"pause"}
            title={paused ? "Paused" : "Pause Current Game"}
            type={paused ? "secondary" : "primary"}
            onPress={() => setConfirmModalVisible(true)}
          />
          <PrimaryButton
            title={"Set Time"}
            type={"secondary"}
            onPress={() => setTimeModalVisible(true)}
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
        visible={timeModalVisible}
        onRequestClose={() => setTimeModalVisible(!timeModalVisible)}
      >
        <ModalContainer
          closeModal={() => setTimeModalVisible(!timeModalVisible)}
        >
          <View>
            <Text style={headings.heading1}>Set Time</Text>
            <Text style={styles.text}>Solidify max gaming time.</Text>
            <Input
              placeholder={"Input time in minutes"}
              onChange={setTime}
              value={time}
              type={"numeric"}
            />
            <PrimaryButton
              title={"Set Time"}
              type={"filled"}
              onPress={callModifyMaxTime}
            />
          </View>
        </ModalContainer>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmModalVisible}
        onRequestClose={() => setConfirmModalVisible(!confirmModalVisible)}
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
                onPress={callUnPauseAPI}
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
                onPress={callPauseAPI}
              />
              <AnimatedLoader
                visible={loading}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.lottie}
                speed={1}
              >
                <Text style={[headings.heading3, { marginTop: 20 }]}>
                  Loading
                </Text>
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
    height: 50,
  },
});
