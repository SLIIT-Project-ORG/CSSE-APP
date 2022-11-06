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

const AddInventory = () => {
  const [warehouse_id, setwarehouse_id] = useState("");
  const [inventory_type, setinventory_type] = useState("");
  const [inventory_location, setinventory_location] = useState("");
  const [inventory_name, setinventory_name] = useState("");
  const [inventory_description, setinventory_description] = useState("");
  function sendData(e) {
    e.preventDefault();
    const newfueldetail = {
      warehouse_id,
      inventory_type,
      inventory_location,
      inventory_name,
      inventory_description,
    };
    //console.log(newfueldetail);
    axios
      .post("http://localhost:4000/inventory/insert", newfueldetail)
      .then(() => {
        alert("video Detais added");
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
          <Text style={styles.myTitle2}>Add Inventory</Text>
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
              setinventory_type(e.target.value);
            }}
            placeholder=" Inventory Type"
          />
        </View>
        <View>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setinventory_location(e.target.value);
            }}
            placeholder="Location"
          />
        </View>
        <View>
          <Text style={styles.label}>inventory_name</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setinventory_name(e.target.value);
            }}
            placeholder="inventory_name"
          />
        </View>
        <View>
          <Text style={styles.label}>inventor description</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setinventory_description(e.target.value);
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

export default AddInventory;
