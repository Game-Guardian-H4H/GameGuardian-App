import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./lib/PrimaryButton";

export const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.heading1}>Welcome</Text>
      <View style={styles.container}>
        <Text style={styles.heading2}>Welcome</Text>
        <Text
          style
        >bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh</Text>
        <PrimaryButton
          title={"Pause Current Game"}
          type={'primary'}
          // onPress={() =>}
        />
      </View>
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
  container:{
    backgroundColor: "white",
    borderWidth: 1,
    borderColor:'#F0F0F0',
    shadowColor: '#BEBEBE',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius:20,
    padding:20
  }
});