import React from "react";
import  { StyleSheet, View, Text } from "react-native";


const HomeScreen = () => {
    return (
        <>
      
        <View style={styles.containerStyle}>
            <View style={styles.vone}>
                <Text style={ styles.textStyle }>one</Text>
                <Text style={ styles.textUpStyle }>dois</Text>
                <Text style={ styles.textStyle }>tres</Text>
            </View>
            <View style={styles.vtwo}>
                <Text style={ styles.textStyle }>one</Text>
                <Text style={ styles.textStyle }>dois</Text>
                <Text style={ styles.textStyle }>tres</Text>
            </View>
        </View>
        </>
        // <View style={styles.viewStyle}>
        //     <Text style={styles.titleStyle}>Olá Mundo</Text>
        //     <Text style={styles.textStyle} >Primeiro Texto</Text>
        //     <Text style={styles.textStyle}>Segundo Textp Texto</Text>
        // </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
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