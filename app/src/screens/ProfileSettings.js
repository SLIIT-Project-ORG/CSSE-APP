import React from 'react'
import {SafeAreaView,ScrollView,Image,View,TouchableOpacity,Text,StyleSheet} from "react-native";
import profile from '../../assets/profile.png';
import AppBarComponent from "../other/AppBarComponent";

const ProfileSettings =()=> {
  return (
    
    <SafeAreaView style={{ felix: 1 }}>
    <ScrollView>
        <AppBarComponent/>
        <View style={{ justifyContent: 'left', alignItems: 'left' }}>
        <Image source={profile} style={styles.BorderClass} />
        </View>

        <View style={styles.container}>
        <Text style={styles.myTitle}>PROFILE</Text>
        </View>
       
        <View>
        <Text style={styles.label}>Full Name :</Text>
        </View>

        <View>
            <Text style={styles.label}>User Name :</Text>
        </View>

        <View>
            <Text style={styles.label}>Email :</Text>
        </View>

        <View>
            <Text style={styles.label}>  Mobile No:</Text>
        </View>
        
        <View>
            <Text style={styles.label}>Address :</Text>
        </View>
    

   <View>
    <TouchableOpacity style={styles.defaultButton} >
        <Text style={{fontWeight:'bold' , fontSize:20, color:'white' ,textAlign:'center'}}> UPDATE</Text>
    </TouchableOpacity>
    </View>

    <View>
    <TouchableOpacity style={styles.defaultButton1} >
        <Text style={{fontWeight:'bold' , fontSize:20, color:'white' ,textAlign:'center'}}> CANCEL</Text>
    </TouchableOpacity>
    </View>
        
    </ScrollView>
</SafeAreaView> 

  )
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
    },
    myTitle: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "right",
        marginRight:20,
        color: 'black',
        marginTop:-180

    },

    BorderClass:
    {

        width: 200,
        height: 200,
        borderWidth: 4,
        borderColor: 'white',
    },
    label: {
        fontSize: 20,
        marginTop:20,
        marginLeft:-160,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black'

    },
    labeltext:{
      fontSize:20,
      fontWeight:'bold',
      marginLeft:80,
      color:'red',
      marginTop:10

    },
    inputfields:{
     
        borderColor:'#00004d',
        borderWidth:1,
        padding:15,
        fontSize:16,
        borderRadius:10,
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        
    },
    defaultButton:{
      
       backgroundColor:'#008ae6',
       marginTop:15,
       marginLeft:50,
       marginRight:50,
       padding:10,
       borderRadius:15


    },
    defaultButton1:{
      
        backgroundColor:'gray',
        marginTop:10,
        marginLeft:50,
        marginRight:50,
        padding:15,
        borderRadius:15
 
 
     },

     defaultButton2:{
      
        backgroundColor:'#a1f0b0',
        marginTop:10,
        marginLeft:80,
        marginRight:10,
        padding:10,
        borderRadius:15
 
 
     }
    })
export default ProfileSettings