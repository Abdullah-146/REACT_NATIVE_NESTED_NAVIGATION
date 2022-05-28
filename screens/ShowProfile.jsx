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
import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const ShowProfile = ({route}) => {
  
      {console.log(route.params.index)}
    return (  
  <View style={styles.container}>
    <Image
      style={styles.tinyLogo}
      source={{uri: users[route.params.index].profileImage}}
    />
    <Text style={styles.text}> {users[route.params.index].displayName}</Text>
    <Text style={styles.text}> {users[route.params.index].id}</Text>
    <Text style={styles.text}> {users[route.params.index].bio}</Text>
    <Text style={styles.text}>  {users[route.params.index].email}</Text>
  </View>

  )
}
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
export default ShowProfile