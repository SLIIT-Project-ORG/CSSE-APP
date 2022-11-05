
import React from 'react';
import { SafeAreaView, ScrollView, View ,StyleSheet,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import AppBarComponent from '../other/AppBarComponent';
import login from '../../assets/login.png'

const AdminPanel = () => {
  return (
    <SafeAreaView style={{ felix: 1 }}>
        <ScrollView>
            <AppBarComponent/>
            
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={login} Style ={Styles.box}></Image>
            </View>

            <View>
                <Text style ={Styles.Title}>WELCOME !!</Text>
            </View>
        
           
           <View>
            <TouchableOpacity style={Styles.defaultButton1} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'white' ,textAlign:'center'}}>Order Management</Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={Styles.defaultButton2} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'white' ,textAlign:'center'}}>WareHouse Management</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={Styles.defaultButton1} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'white' ,textAlign:'center'}}>Inventry Management</Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={Styles.defaultButton2} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'white' ,textAlign:'center'}}>Item Management</Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={Styles.defaultButton1} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'white' ,textAlign:'center'}}>Inventry Management</Text>
            </TouchableOpacity>
            </View>
           
            <View>
            <TouchableOpacity style={Styles.defaultButton2} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'white' ,textAlign:'center'}}>Payment Management</Text>
            </TouchableOpacity>
            </View>
          
           
        </ScrollView>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({

Title:{

    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:100,
    marginBottom:20
   
},
inputfields:{
     
  borderColor:'darkgray',
  borderWidth:1,
  padding:10,
  fontSize:16,
  borderRadius:10,
  marginTop:20,
  marginLeft:30,
  marginRight:30,
  backgroundColor:'lightgray'
  
},
defaultButton1:{
      
  backgroundColor:'#00004d',
  marginTop:15,
  marginLeft:10,
  marginRight:10,
  padding:10,
  borderRadius:15


},
defaultButton2:{
      
  backgroundColor:'#008ae6',
  marginTop:15,
  marginLeft:10,
  marginRight:10,
  padding:10,
  borderRadius:15


},
box:{

  height:250,
  width:320,
  marginTop:20,
  marginLeft:10,
  marginRight:10


}


})
export default AdminPanel