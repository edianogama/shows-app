import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import  { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/Home'
import ShowsScreen from './src/screens/Shows'
import NewShowScreen from './src/screens/NewShow'

import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';  


const TabNav = createBottomTabNavigator();
const tabBarStyles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom:30,
        padding: 20,
        paddingRight: 15
    }
}); 
const TabBar = ({navigation, state}) => {
    const index = state.index;
   return ( 
    <View style={tabBarStyles.viewStyle}>
        <>
            <TouchableOpacity onPress={() => navigation.navigate("Home") }>
                <SimpleLineIcons name="home" size={24} color={index===0 ? "blue" :"black"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Shows") }>
                <SimpleLineIcons name="list" size={24} color={index===1 ? "blue" :"black"}  />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("NewShow") }>
                <Ionicons name="ios-add" size={24} color={index===2 ? "blue" :"black"}  />
            </TouchableOpacity>

            </>
    </View>
    );
}
export default function App() {
  return (
     <NavigationContainer>
         <TabNav.Navigator tabBar={ props => <TabBar {...props} />}>
            <TabNav.Screen name={"Home"} component={HomeScreen}/>
            <TabNav.Screen name={"Shows"} component={ShowsScreen}/>
            <TabNav.Screen name={"NewShow"} component={NewShowScreen} />
         </TabNav.Navigator>
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
