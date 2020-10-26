import React from 'react'
import {FlatList, Text,View, TouchableOpacity, StyleSheet} from 'react-native';

const shows  = { items: [
        {
            id:1,
            nome: "Friends"
        },
        {
            id:2,
            nome: "Flash"
        },
        {
            id:3,
            nome: "Arrow"
        },
        {
            id:4,
            nome: "The Boys"
        },
    ]};
export const ShowList = () => {
    return (
        <>
            <View style={styles.listStyle}>
                <FlatList
                    data={shows.items}
                    renderItem={({item})=><TouchableOpacity
                        onPress={() => { console.info("clicado em: "+ item.id ) }}
                    >
                        <View style={styles.buttonStyle} >
                            <Text>{item.nome}</Text>
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