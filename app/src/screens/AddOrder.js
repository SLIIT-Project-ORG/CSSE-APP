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

const AddOrder = () => {
  const [siteId, setsiteId] = useState("");
  const [supplierId, setsupplierId] = useState("");
  const [siteManagerId, setsiteManagerId] = useState("");
  const [items, setitems] = useState("");
  const [totalAmount, settotalAmount] = useState("");
  const [date, setdate] = useState("");
  function sendData(e) {
    e.preventDefault();
    const newfueldetail = {
      siteId,
      supplierId,
      siteManagerId,
      items,
      totalAmount,
      date,
    };
    //console.log(newfueldetail);
    axios
      .post("http://localhost:4000/order/create", newfueldetail)
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
          <Text style={styles.myTitle2}>Add  Order</Text>
        </View>

        <View>
          <Text style={styles.label}>Site ID</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
                setsiteId(e.target.value);
            }}
            placeholder="Site ID"
          />
        </View>

        <View>
          <Text style={styles.label}> Supplier id</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setsupplierId(e.target.value);
            }}
            placeholder=" Supplier id"
          />
        </View>
        <View>
          <Text style={styles.label}>site manager id</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setsiteManagerId(e.target.value);
            }}
            placeholder="site manager id"
          />
        </View>
        <View>
          <Text style={styles.label}>items</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setitems(e.target.value);
            }}
            placeholder="items"
          />
        </View>
        <View>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              settotalAmount(e.target.value);
            }}
            placeholder="Amount"
          />
        </View>
        <View>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.inputfields}
            onChange={(e) => {
              setdate(e.target.value);
            }}
            placeholder="Date"
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

export default AddOrder;
