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
    let intervalId = null;

    const fetchData = async () => {
      try {
        const response = await fetch(`${END_POINT_BASE}/users/${userId}`);
        const json = await response.json();
        setPaused(json.isPaused);
        setUser(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    intervalId = setInterval(() => {
      if (!paused) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
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
          setConfirmModalVisible(false);
          setUser({ ...user, maxTimeAllowed: time });
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const forceQuit = () => {
    setTime(0);
    callModifyMaxTime();
  };

  const TextWithColor = (curr, max) => {
    let color;
    let n = ((max - curr) / max) * 100;
    if (n > 75) {
      color = "green";
    } else if (n > 50) {
      color = "orange";
    } else {
      color = "red";
    }

    const textStyle = {
      color: color,
      fontSize: 16,
      fontWeight: "bold",
      // add any other styles you need here
    };

    return <Text style={textStyle}>{max - curr} minutes</Text>;
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
          <Text style={styles.text}>H4HSegFault player stats:</Text>
          {user.maxTimeAllowed - user.currentTime > 0 ? (
            <Text style={styles.text}>
              Remaining Time:{" "}
              {TextWithColor(user.currentTime, user.maxTimeAllowed)}
            </Text>
          ) : null}
          {user.currentTime > 0 ? (
            <Text style={styles.text}>Playing for 87 minutes today</Text>
          ) : null}
          {user.maxTimeAllowed > 0 ? (
            <Text style={styles.text}>
              <Text style={[styles.text, { fontWeight: "bold" }]}>
                Max allowed time: {user.maxTimeAllowed} minutes
              </Text>
            </Text>
          ) : null}
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
                onPress={forceQuit}
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

const styles2 = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    marginTop: 10,
  },
  orange: {
    backgroundColor: "orange",
    width: 50,
    height: 50,
  },
  red: {
    backgroundColor: "red",
    width: 50,
    height: 50,
  },
  green: {
    backgroundColor: "green",
    width: 50,
    height: 50,
  },
});
