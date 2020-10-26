import React  from "react";
import { View,StyleSheet } from 'react-native';

const ShowsScreen = () => {
    return (
        <>
           <View style={styles.parentStyle}>
               <View style={styles.listStyle}>

               </View>
               <View style={styles.detailStyle}>

               </View>
           </View>
        </>
    );

}
const styles = StyleSheet.create({
    parentStyle: {
        backgroundColor:"red",
        flex:1,
        marginTop: 40
    },
    listStyle: {
        backgroundColor: "blue",
        flex: 2
    },
    detailStyle: {
        backgroundColor: "green",
        flex:1
    },
})

export default ShowsScreen;