import React  from "react";
import { View,StyleSheet } from 'react-native';
import ShowDetail from '../components/detail/ShowDetail';
import { ShowList } from '../components/list/ShowList';

const ShowsScreen = () => {
    return (
        <>
           <View style={styles.parentStyle}>
               <View style={styles.listStyle}>
                    <ShowList/>
               </View>
               <View style={styles.detailStyle}>
                   <ShowDetail/>
               </View>
           </View>
        </>
    );

}
const styles = StyleSheet.create({
    parentStyle: {
        flex:1,
        marginTop: 40
    },
    listStyle: {
        flex: 2
    },
    detailStyle: {
        backgroundColor: "green",
        flex:1
    },
})

export default ShowsScreen;