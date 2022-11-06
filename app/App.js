import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './src/screens/HomePage';
import Login from './src/screens/Login';

import ProfileSettings from './src/screens/ProfileSettings';
import Purchase from './src/screens/Purchase';


import Register from './src/screens/Register';
import StartPage from './src/screens/StartPage';
import Managewarehouse from './src/screens/Warehouse';
import ManageInventory from './src/screens/Invenory';
import AddInventory from './src/screens/AddInventory';
import Addwarehouse from './src/screens/Addwarehouse';
import AdminPanel from './src/screens/AdminPage';
import AddOrder from './src/screens/AddOrder';
const Stack = createStackNavigator();
export default function App() {
  return (
    // <View>
    //   <Login/>
    // </View>,
    // <View>
    //   <StartPage/>
    // </View>,
    // <View>
    //   <HomePage/>
    // </View>,
    // <View>
    //   <Register/>
    // </View>,
    // <View>
    //   <ProfileSettings/>
    // </View>,
    // <View>
    //   <Managewarehouse/>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage">
        <Stack.Screen
          name="StartPage"
          component={StartPage}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="AdminPanel"
          component={AdminPanel}
        />
         <Stack.Screen
          name="AddInventory"
          component={AddInventory}
        />
         <Stack.Screen
          name="Addwarehouse"
          component={Addwarehouse}
        />
         <Stack.Screen
          name="ManageInventory"
          component={ManageInventory}
        />
         <Stack.Screen
          name="ManageWarehouse"
          component={Managewarehouse}
        />
        <Stack.Screen
          name="AddOrder"
          component={AddOrder}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


