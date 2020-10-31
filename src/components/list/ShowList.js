import React from 'react'
import {FlatList, Text,View, TouchableOpacity, StyleSheet} from 'react-native';
import { useShows } from '../../hooks/useShows';


export const ShowList = () => {
    const {shows} = useShows();
   
    return (
        <>
            <View style={styles.listStyle}>
                <FlatList
                    data={shows}
                    keyExtractor={(item) => item.id }
                    renderItem={({item})=><TouchableOpacity
                        onPress={() => { console.info("clicado em: "+ item.id ) }}
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