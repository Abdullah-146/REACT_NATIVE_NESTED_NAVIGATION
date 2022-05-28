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
    profileImage:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",

    bio: "description with 100 words",
    email: "email addres",
  },
  {
    id: "46546466",
    displayName: "Muhammad Musa",
    profileImage:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",

    bio: "description with 100 words",
    email: "email addres",
  },
  {
    id: "46546467",
    displayName: "Muhammad Mustafa",
    profileImage:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",

    bio: "description with 100 words",
    email: "email addres",
  },
  {
    id: "46546468",
    displayName: "Abdullah",
    profileImage:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    bio: "description with 100 words",
    email: "email addres",
  },
];
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import ShowProfile from "./ShowProfile";

const Profile = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item,index }) => {
          return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.container} onPress={() => {  return ( navigation.navigate('ShowProfile',{index}) );}}>
                <Image
                  style={styles.tinyLogo}
                  source={{ uri: item.profileImage }}
                />
                <View style={styles.intro}>
                  <Text style={styles.items}>{item.displayName}</Text>
                  <Text style={styles.items}>{item.id}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  intro: {
    display: "flex",
    flexDirection: "column",
  },
  items: {
    color: "black",
    paddingLeft: 10,
  },
  tinyLogo: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
export default Profile;
