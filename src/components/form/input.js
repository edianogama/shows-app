import React,{useState} from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';
import GenericInput from './GenericInput';


const Input = (props) => {
    const onChange = (text) => { 
        if(props.onChange)
            props.onChange(text);
    }

    return (
    <>
        <Text style={styles.textLabelStyle}>{props.label}</Text>
        <GenericInput initialValue={props.initialValue} style={styles.textInputStyle} 
        onChange={onChange} />
    </>
    )
}

export default Input;

const styles = StyleSheet.create({
    textLabelStyle: {
        marginLeft: 10,
        marginTop: 20
    },
    textInputStyle: {
        backgroundColor: "#ddd",
        marginTop:20,
        padding: 10,
        marginLeft:10,
        marginRight:10
    }
})