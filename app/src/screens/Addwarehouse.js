import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Addwarehouse = () => {
  const [warehouse_id, setwarehouse_id] = useState("");
  const [warehouse_name, setwarehouse_name] = useState("");
  const [warehouse_address, setwarehouse_address] = useState("");
  const [warehouse_company, setwarehouse_company] = useState("");
  const [warehouse_contactno, setwarehouse_contactno] = useState("");
  function sendData(e) {
    e.preventDefault();
    const newfueldetail = {
      warehouse_id,
      warehouse_name,
      warehouse_address,
      warehouse_company,
      warehouse_contactno,
    };
    //console.log(newfueldetail);
    axios
      .post("http://localhost:4000/warehouse/insert", newfueldetail)
      .then(() => {
        alert("warehouse Detais added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <SafeAreaView style={{ felix: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.myTitle}>Xpert</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.myTitle2}>Add warehouse</Text>
        </View>

        <View>
          <Text style={styles.label}>warehouse id</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
                setwarehouse_id(e.target.value);
            }}
            placeholder="warehouse id"
          />
        </View>

        <View>
          <Text style={styles.label}> Inventory Type</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setwarehouse_name(e.target.value);
            }}
            placeholder=" Inventory Type"
          />
        </View>
        <View>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setwarehouse_address(e.target.value);
            }}
            placeholder="Location"
          />
        </View>
        <View>
          <Text style={styles.label}>warehouse_company</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setwarehouse_company(e.target.value);
            }}
            placeholder="warehouse_company"
          />
        </View>
        <View>
          <Text style={styles.label}>contact no</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setwarehouse_contactno(e.target.value);
            }}
            placeholder="inventory description"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.defaultButton}>
            <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}} onPress={sendData}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  myTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2fa347",
  },
  myTitle2: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#00e673",
  },

  BorderClass: {
    width: 360,
    height: 300,
    borderWidth: 4,
    borderColor: 'black',
  },
  label: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: -160,
    fontWeight: "bold",
    textAlign:"center",
    color: "black",
  },
  labeltext: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 80,
    color: "red",
    marginTop: 10,
  },
  inputfields: {
    borderColor: "a7a7",
    borderWidth: 1,
    padding: 15,
    fontSize: 16,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  defaultButton: {
    backgroundColor:'#1fbf3f',
       marginTop:15,
       marginLeft:50,
       marginRight:50,
       padding:10,
       borderRadius:15
        
 
  },
  defaultButton1: {
    backgroundColor:'#a1f0b0',
    marginTop:10,
    marginLeft:60,
    marginRight:20,
    padding:10,
    borderRadius:15

  },
});

export default Addwarehouse;
