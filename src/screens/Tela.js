import React, { useState } from "react";
import  { StyleSheet, View, Text, TextInput } from "react-native";

const TelaScreen = () => {

    return (
        <>
        <View style={styles.containerStyle}>
            <Text style={styles.textInputStyle}>Tela de Navegacacao 2</Text>
        </View>
        </>
        
    )
}
export default TelaScreen;

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
        alignItems: "stretch",
        justifyContent: "flex-start",
        marginTop:10
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