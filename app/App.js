import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/screens/HomePage';
import Login from './src/screens/Login';

import ProfileSettings from './src/screens/ProfileSettings';
import Purchase from './src/screens/Purchase';


import Register from './src/screens/Register';
import StartPage from './src/screens/StartPage';

export default function App() {
  return (
    <View>
      <Login/>
    </View>,
    <View>
      <StartPage/>
    </View>,
    <View>
      <HomePage/>
    </View>,
    <View>
      <Register/>
    </View>,
    <View>
      <ProfileSettings/>
    </View>,
    <View>
      <Purchase/>
    </View>
  );
}


