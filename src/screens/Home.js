import React, { useState } from "react";
import  { StyleSheet, View, Text, TextInput } from "react-native";

const HomeScreen = () => {
    return (
        <>
        <View style={styles.viewStyle}>
            <Text>Séries Inc.</Text>
        </View>
        </>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})