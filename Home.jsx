import { View, Text, Pressable } from 'react-native'
import React from 'react'


const Home = ({navigation}) => {
  const screen = ()=>{
     navigation.navigate('Settings');
  }
  return (
    <View>
      <Pressable><Text onPress={screen} >Home</Text></Pressable>
      
    </View>
  )
}

export default Home