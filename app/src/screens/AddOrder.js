import React from 'react'
import { SafeAreaView, ScrollView ,View , Text, TextInput, TouchableOpacity,StyleSheet ,Image} from 'react-native'
import AppBarComponent from '../other/AppBarComponent'



const Order = () => {
  return (
   <SafeAreaView>
    <ScrollView>
       
        <AppBarComponent/>


        <Text style={styles.myTitle}>CREATE ORDER</Text>
       
                <View>
                    <Text style={styles.label}>Site ID</Text>
                    <TextInput style={styles.inputfields} />
                </View>


                <View>
                    <Text style={styles.label}>Supplier ID</Text>
                    <TextInput style={styles.inputfields} />
                </View>

                <View>
                    <Text style={styles.label}>Site Manager ID</Text>
                    <TextInput style={styles.inputfields} />
                </View>

                <View>
                    <Text style={styles.label}>WareHouse ID</Text>
                    <TextInput style={styles.inputfields}  />
                </View>

              
               


                <View>
                    <TouchableOpacity style={styles.defaultButton} >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}>Upload Order</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.defaultButton1} >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}> CANCEL</Text>
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
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black',marginTop:10

    },

    BorderClass:
    {

        width: 360,
        height: 300,
        borderWidth: 4,
        borderColor: 'black',
    },
    label: {
        fontSize: 20,
        marginTop: 30,
        marginLeft: -160,
        fontWeight: "bold",
        textAlign: "center",
        color: 'black'

    },
    labeltext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 80,
        color: 'red',
        marginTop: 5

    },
    inputfields: {

        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        fontSize: 16,
        borderRadius: 10,
        marginTop: 5,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor:'lightgray'

    },
    defaultButton: {

        backgroundColor: '#00004d',
        marginTop: 30,
        marginLeft: 50,
        marginRight: 50,
        padding: 8,
        borderRadius: 15


    },
    defaultButton1: {

        backgroundColor: '#008ae6',
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        padding: 8,
        borderRadius: 15


    },
    box:{

        height:250,
        width:320,
        marginTop:20,
        marginLeft:30,
        marginRight:10
      
      
      }
})

export default Order