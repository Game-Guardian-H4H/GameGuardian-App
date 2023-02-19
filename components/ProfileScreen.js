import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./lib/PrimaryButton";
import { Container } from "./lib/Container";
import { Game } from "./lib/Game";
import { gamesData } from "../util/gamesDummyData";
import { useState } from "react";
import { ModalContainer } from "./lib/ModalContainer";
import Icon from 'react-native-vector-icons/Feather';
import { Align } from "./lib/Align";

export const ProfileScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.section}>
      <Align justifyContent={'space-between'}>
        <Text style={styles.heading1}>Welcome</Text>
        <Align justifyContent={'flex-end'}>
          <Icon
            name="plus"
            size={20}
            color="black"
            style={{marginRight:10}}
          />
          <Pressable
            onPress={()=> setModalVisible(true)}
          >
            <Icon
              name="info"
              size={20}
              color="black"
              style={{marginRight:10}}
            />
          </Pressable>
        </Align>
      </Align>
      <View
        style={{
          marginTop:5,
          marginBottom:5
        }}
      >
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <ModalContainer>
          <Text style={styles.heading1}>
            Info
          </Text>          
          <Text style={styles.heading3}>
            Parental Control for Any Game
          </Text>
          <Text style={styles.info}>
            ・Parental control for Roblox Experience.{"\n"}
            ・View status of games being played.{"\n"}
            ・Pause game play.{"\n"}
          </Text>
          <PrimaryButton
            title={"Close Modal"}
            type={"secondary"}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </ModalContainer>
      </Modal>
    </View>
  )
  
};


const styles = StyleSheet.create({
  section: {
    flex: 1,
    // justifyContent:'space-between',
    // backgroundColor: "white",
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
  heading3: {
    fontWeight:'bold',
    letterSpacing: -0.5,
    fontSize: 17,
    color: '#000',
    marginBottom:10
  },
  text:{
    marginBottom:10
  },
});