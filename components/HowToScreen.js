import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Container } from "./lib/Container";
import { headings } from "./lib/headings";

export const HowToScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.section}>
          <Text style={headings.heading2}>Get Started</Text>
          <View
            style={{
              marginBottom: 25,
            }}
          >
            <Container>
              <Text style={headings.heading3}>Parental Control for Any Game</Text>
              <Text style={styles.info}>
                ・Parental control for Roblox Experience.{"\n"}
                ・View status of games being played.{"\n"}
                ・Pause game play.{"\n"}
              </Text>

              <Text style={headings.heading3}>About</Text>
              <Text>
                Game Guardian is an application that allows parents to manage and control their children's gaming activities. Here are the steps to use the app
              </Text>
            </Container>
          </View>

          <Text style={headings.heading2}>Basics</Text>
          <View
            style={{
              marginBottom: 25,
            }}
          >
            <Container>
              <Text style={headings.heading3}>Pausing</Text>
              <Text style={styles.text}>
                To pause your child's gaming session, simply click on the "Pause Current Game" button in the app. This will stop their game (with a little bit of delay) and they will be unable to play until you unpause it.
              </Text>
              <Text style={headings.heading3}>Analytics</Text>
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
    padding: 24,
  },
  text: {
    marginBottom: 10,
  },
});
