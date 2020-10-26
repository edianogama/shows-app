import React,{useState} from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';


const Input = (props) => {
    const [stateValor, setStateValor] = useState(props.initialValue);
    const onChange = (text) => { 
        setStateValor(text);
        props.onChage(text);
    }

    return (
    <>
        <Text>{props.label}</Text>
        <TextInput value={stateValor} style={styles.textInputStyle} 
        onChangeText={onChange} />
    </>
    )
}

export default Input;

const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: "#ddd",
        marginTop:20,
        padding: 10,
        marginLeft:10,
        marginRight:10
    }
})