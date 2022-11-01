import React from 'react'
import { SafeAreaView, ScrollView, View,StyleSheet,Image,TouchableOpacity,Text } from 'react-native'
import start from '../../assets/start.png'
import AppBarComponent from '../other/AppBarComponent'
import xperts from '../../assets/xperts.png'


function StartPage() {
  return (
    
    <SafeAreaView style={{felix: 1}}>
        <ScrollView>
            <AppBarComponent/>

         <View>
        <Image source={xperts} style={Styles.box1}></Image>
        </View>

        <View>
        <Image source={start} style={Styles.box}></Image>
        </View>



        <View>
            <TouchableOpacity style={Styles.defaultButton} >
                <Text style={{fontWeight:'bold' , fontSize:25, color:'white' ,textAlign:'center'}}>GET STARTED</Text>
            </TouchableOpacity>
        </View>


      
       </ScrollView>
    </SafeAreaView>


  )
}

const Styles = StyleSheet.create({

    defaultButton:{
      
        backgroundColor:'#00004d',
        marginTop:20,
        marginLeft:60,
        marginRight:60,
        padding:15,
        borderRadius:1
      
      
      },
      box:{
      
        height:300,
        width:340,
        marginTop:60,
        marginLeft:10,
        marginRight:10
      
      
      },

      box1:{

        height:100,
        width:200,
        marginTop:50,
        marginLeft:80,
        marginRight:10

      }



})

export default StartPage