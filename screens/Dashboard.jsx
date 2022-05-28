import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  const screen = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        }}
      />
      <Text style={styles.text}>Muhammad Haris</Text>
      <Text style={styles.text}>id:46546464</Text>
      <Text style={styles.text}>bio:description with 100 words</Text>
      <Text style={styles.text}> email: email address</Text>
      <Pressable>
        <Text onPress={screen}> Go To Profile Page</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    padding: 4,
  },
  tinyLogo: {
    borderRadius:100,
    width: 150,
    height: 150,
  },
});
export default Home;
