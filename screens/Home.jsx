let users = [
  {
    id: "46546464",
    displayName: "Muhammad Haris",
    profileImage:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    bio: "description with 100 words",
    email: "email address",
  },
  {
    id: "46546465",
    displayName: "Abdur Rehman",
    profileImage: "link to image",
    bio: "description with 100 words",
    email: "email addres",
  },
  {
    id: "46546466",
    displayName: "Muhammad Musa",
    profileImage: "link to image",
    bio: "description with 100 words",
    email: "email addres",
  },
  {
    id: "46546467",
    displayName: "Muhammad Mustafa",
    profileImage: "link to image",
    bio: "description with 100 words",
    email: "email addres",
  },
  {
    id: "46546468",
    displayName: "Abdullah",
    profileImage: "link to image",
    bio: "description with 100 words",
    email: "email addres",
  },
];

import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.items}>Users are: </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <Text style={styles.items}>{item.displayName}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  items: {
    fontSize: 20,
    fontWeight: '500',
  },
});
export default HomeScreen;
