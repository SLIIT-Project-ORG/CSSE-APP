import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Order from './src/screens/AddOrder';
import WareHouse from './src/screens/AddWarehouse';
import AdminPanel from './src/screens/AdminPage';
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
      <AdminPanel/>
    </View>,
    <View>
      <Order/>
    </View>,
    <View>
      <WareHouse/>
    </View>
    // <View>
    //   <Purchase/>
    // </View>
  );
}


