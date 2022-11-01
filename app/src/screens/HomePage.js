import React from 'react'
import { SafeAreaView, ScrollView, View, Image ,StyleSheet,TouchableOpacity ,Text} from 'react-native'
import xperts from '../../assets/xperts.png'
import manager from '../../assets/manager.png'
import supplier from '../../assets/suppliers.png'
import settings from '../../assets/settings.png'
import signout from '../../assets/signout.png'

const HomePage = () => {
  return (

    <SafeAreaView>
        <ScrollView>
          
          <View>
            <TouchableOpacity>
                <Image source={manager} style={Styles.box1}></Image>
               <Text style={Styles.lable1}>Site Manager</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
            <Image source={supplier} style={Styles.box2}></Image>
               <Text style={Styles.lable2}>Supplier</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
                
            <Image source={settings} style={Styles.box1}></Image>
               <Text style={Styles.lable3}>Settings</Text>
            </TouchableOpacity>
          </View>
         
          <View>
            <TouchableOpacity>
            <Image source={signout} style={Styles.box2}></Image>
               <Text style={Styles.lable4}>Sign Out</Text>
            </TouchableOpacity>
          </View>




            <View>
                <Image source={xperts} style={Styles.box}></Image>
            </View>
        </ScrollView>
    </SafeAreaView>
   
  )
}

const Styles = StyleSheet.create({

    box1:{
      
        height:100,
        width:100,
        marginTop:30,
        marginLeft:10,
        marginRight:10,
        borderColor:'black',
        borderRadius:20,
        borderWidth:2,
        padding:60
       
        
        
    },
    lable1:{

        fontSize:25,
        fontWeight:'bold',
        color:'black',
        marginLeft:20,
        marginTop:10,
        
    
    },
    box2:{
      
        height:100,
        width:100,
        marginLeft:200,
        marginTop:-164,
        
        marginRight:20,
        borderColor:'black',
        borderRadius:20,
        borderWidth:2,
        padding:60
         
    },
   
    lable2:{

        fontSize:25,
        fontWeight:'bold',
        color:'black',
        marginLeft:210,
        marginTop:5,
        
        
    
    },

    lable3:{

        fontSize:25,
        fontWeight:'bold',
        color:'black',
        marginLeft:20,
        marginTop:5,
        
    
    },

    lable4:{

        fontSize:25,
        fontWeight:'bold',
        color:'black',
        marginLeft:210,
        marginTop:5
        
        
    
    },

    box:{

        height:200,
        width:340,
        marginLeft:20,
       
        marginTop:90

    }




})
export default HomePage