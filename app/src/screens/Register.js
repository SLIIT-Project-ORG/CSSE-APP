import React from 'react'
import { SafeAreaView, ScrollView ,View , Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import AppBarComponent from '../other/AppBarComponent'

const Register = () => {
  return (
   <SafeAreaView>
    <ScrollView>
       
        <AppBarComponent/>
                <View>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput style={styles.inputfields} />
                </View>


                <View>
                    <Text style={styles.label}>User Type</Text>
                    <TextInput style={styles.inputfields} />
                </View>

                <View>
                    <Text style={styles.label}>User Name</Text>
                    <TextInput style={styles.inputfields} />
                </View>

                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.inputfields} placeholder="Enter your Email" />
                </View>

                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.inputfields} secureTextEntry='true' placeholder="Enter your Password" />

                </View>

                <View>
                    <Text style={styles.label}>Mobile Number</Text>
                    <TextInput style={styles.inputfields} />
                </View>

                <View>
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.inputfields} />
                </View>


                <View>
                    <TouchableOpacity style={styles.defaultButton} >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}>REGISTER</Text>
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
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: '#2fa347'

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
        marginTop: 10,
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
        marginTop: 8,
        marginLeft: 50,
        marginRight: 50,
        padding: 8,
        borderRadius: 15


    },
    defaultButton1: {

        backgroundColor: '#008ae6',
        marginTop: 8,
        marginLeft: 50,
        marginRight: 50,
        padding: 8,
        borderRadius: 15


    }
})

export default Register