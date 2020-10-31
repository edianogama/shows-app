import React, { useContext } from 'react'
import {FlatList, Text,View, TouchableOpacity, StyleSheet} from 'react-native';
import { useShows } from '../../hooks/useShows';
import { AppContext } from '../../context/AppContext';


export const ShowList = () => {
    const {shows} = useShows();
    const {dispatch} = useContext(AppContext);

    return (
        <>
            <View style={styles.listStyle}>
                <FlatList
                    data={shows.sort((a, b) => (""+ a.name).localeCompare(b.name) )}
                    keyExtractor={(item) => item.id }
                    renderItem={({item})=><TouchableOpacity
                        onPress={() => dispatch({ type:"setItemSelected", payload: item.id }) }
                    >
                        <View style={styles.buttonStyle} >
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    listStyle: {
        marginTop: 20
    },
    buttonStyle: {
        flexDirection: "row",
        justifyContent:"center",
        borderColor: "gray",
        backgroundColor: "#f2f2f2",
        borderTopWidth:1,
        padding: 10
    }
})