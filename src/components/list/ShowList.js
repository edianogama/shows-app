import React, { useEffect, useState } from 'react'
import {FlatList, Text,View, TouchableOpacity, StyleSheet} from 'react-native';
import show from '../../api/show';

export const ShowList = () => {
    const [ListState, setListState] = useState(null);
    /**
     * useEffect substitui os antigos lifecicle. 
     * Ele funciona toda vez quando precisar executar o segundo passo. O side Effect. Ele é passado como parametros []
     * Ex: quando um item se modificar, ele executa o useEffect. Se não passar nada, ele executa só quando criar o componente. Uma vez
     */
    useEffect(() => {
        show.get('/shows')
        .then(response => {
            setListState(response.data);
        });
    },[]);
    
    return (
        <>
            <View style={styles.listStyle}>
                <FlatList
                    data={ListState}
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