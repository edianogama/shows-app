import React, { useState } from "react";
import  { StyleSheet, View, Text, TextInput } from "react-native";
import DatePicker from 'react-native-datepicker';

import Input from '../components/form/input';


const HomeScreen = () => {
    const [stateValorInput, setStateValorInput] = useState("");
    const [stateData, setStateData] = useState("26-10-2020");
    const [stateNome, setStateNome] = useState("");


    return (
        <>
        <View>
            <Input label="Nome" onChange={(text)=>setStateNome(text)}  initialValue={"como assim brother?"} ></Input>
        </View>
        </>
        
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: "#ddd",
        marginTop:20,
        padding: 10,
        marginLeft:10,
        marginRight:10
    },
    containerStyle: {
        flex: 1,
        margin: 10,
    },
    vone: {
        flex:2,
        flexDirection: "row",
        justifyContent:"space-around",
        alignItems: "flex-end",
        backgroundColor:"green",
     },
    vtwo: { 
        flex: 3,
        backgroundColor:"orange",
        alignItems:"flex-end",
        color:"white",
        flexDirection: "column",
        justifyContent:"space-between"
    },
    viewStyle:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    titleStyle: {
        fontSize:20,
        marginBottom:10,

    },
    textUpStyle: {
        alignSelf: "center",
        backgroundColor:"gray",
        margin:5,
        overflow:"hidden",
        padding:10,
        borderWidth:2,
        borderRadius: 10,
        color:"#fff",
        borderColor:"black"
    },

    textStyle: { 
        backgroundColor:"gray",
        margin:5,
        overflow:"hidden",
        padding:10,
        borderWidth:2,
        borderRadius: 10,
        color:"#fff",
        borderColor:"black"
    }
})