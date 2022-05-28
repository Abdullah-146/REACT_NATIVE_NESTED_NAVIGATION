import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Dashboard from './screens/Dashboard'
import ShowProfile from './screens/ShowProfile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

function ScreenA({Navigator}){
    return(
        <Text>Hello pakitsan</Text>
    )
}

function MyTabs() {
    return ( 
        <Tab.Navigator
          screenOptions={({route})=>({
          tabBarIcon:({focused,size,color})=>{
              let iconName;
              if (route.name==='Dashboard'){
                  iconName ='brush';
                  size =focused? 25 : 20;
                  color = focused? 'green' : 'blue';
                 
              }
              else if(route.name==='Home'){
                iconName ='house-user';
                size =focused?  25: 20;
                color = focused? 'green' : 'blue';
              }
              else if(route.name==='Profile'){
                iconName ='anchor';
                size =focused? 25 : 20;
                color = focused? 'green' : 'blue';
              }
              return( <FontAwesome5 name={iconName} 
              size={size}
              color={color}
              /> )
              }
             })}
             barStyle={{backgroundColor:'yellow'}}
        >
         <Tab.Screen name = 'Dashboard' component={Dashboard} options={{tabBarBadge:6}} />
         <Tab.Screen name = 'Home' component={Home} />
         <Tab.Screen name = 'Profile' component={Profile} />
         

        </Tab.Navigator>

    );
}
export default function App() {
    return ( 
<NavigationContainer>
    <Stack.Navigator initialRouteName='MyTabs'>
        <Stack.Screen name ='MyTabs' component={MyTabs} />
        <Stack.Screen name='ShowProfile' component={ShowProfile} /* options={{header: ()=> null}}*/ />



    </Stack.Navigator>


    
</NavigationContainer>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});