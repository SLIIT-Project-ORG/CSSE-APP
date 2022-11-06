
import React from 'react';
import { SafeAreaView, ScrollView, View ,StyleSheet,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import AppBarComponent from '../other/AppBarComponent';
import login from '../../assets/login.png'

const Login = ({navigation}) => {
  
  const token = localStorage.token;

  if (token) {
    navigation.navigate('AdminPanel');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });

    axios.post("http://localhost:4000/user/signin", {
      username: data.get('username'),
      password: data.get('password'),
    })
      .then((res) => {
        alert(res.data.message);
        localStorage.setItem("token", res.data.data);
        if (res.data.message === "Login Successful") {

          if (res.data.usertype === "Admin") {
            window.location.href = "/admindashboard";
          }
          
        }else {
          window.location.href = "/login";
        }
      })
      .catch((err) => {
        console.log(err.message);
      })

  };

  return (
    <SafeAreaView style={{ felix: 1 }}>
        <ScrollView>
            <AppBarComponent/>
            
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={login} Style ={Styles.box}></Image>
            </View>

            <View>
                <Text style ={Styles.Title}>WELCOME BACK !!</Text>
            </View>
           <View>
            <TextInput 
            id="username"
            label="Username"
            name="username"
            style={Styles.inputfields} placeholder="User Name"></TextInput>
           </View>

           <View>
            <TextInput 
            name="password"
            label="Password"
            type="password"
            id="password"
            style={Styles.inputfields} placeholder="Password"></TextInput>
           </View>

           <View>
            <TouchableOpacity style={Styles.defaultButton1} >
                <Text
                onPress={handleSubmit}
                style={{fontWeight:'bold' , fontSize:20, color:'white' ,textAlign:'center'}}>LOGIN</Text>
            </TouchableOpacity>
            </View>

            {/* <View>
            <TouchableOpacity style={Styles.defaultButton2} >
                <Text style={{fontWeight:'bold' , fontSize:20, color:'white' ,textAlign:'center'}}>SIGNUP</Text>
            </TouchableOpacity>
            </View> */}

            <View>
              <Image source={login} style={Styles.box}></Image>
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
  marginLeft:90,
  marginRight:90,
  padding:10,
  borderRadius:15


},
defaultButton2:{
      
  backgroundColor:'#008ae6',
  marginTop:15,
  marginLeft:90,
  marginRight:90,
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
export default Login