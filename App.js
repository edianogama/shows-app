import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import  { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/Home'
import TelaScreen from './src/screens/Tela';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Séries inc" component={HomeScreen} />
            <Stack.Screen name="Tela" component={TelaScreen} />
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
