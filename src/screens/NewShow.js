import React, { useContext, useState }  from "react";
import { Text, View, StyleSheet, Button } from 'react-native';
import Input from '../components/form/Input';
import { AppContext } from "../context/AppContext";

const NewShowScreen = () => {
    const {dispatch} = useContext(AppContext);

    // criar estados para campos;
    const [stateName, setStateName] = useState("");
    const [stateNetwork, setStateNetwork] = useState("");
    const [stateCountry, setStateCountry] = useState("");
    const [stateThumbNail, setStateThumbNail] = useState("");

    const salvar = () => {  
        const action = { 
            type: "addItem",
            payload: { 
                id: 34242342344,
                name: stateName,
                country: stateCountry,
                network: stateNetwork,
                image_thumbnail_path: stateThumbNail
            }
        };
        dispatch(action);
    }
    return (
        <>
          <View style={styles.viewStyle }>
              <Input label={"Nome"}  initialValue={""} onChange={(text) => setStateName(text) } />
              <Input label={"Network"}  initialValue={""} onChange={(text) => setStateNetwork(text)} />
              <Input label={"Country"}  initialValue={""} onChange={(text) => setStateCountry(text)} />
              <Input label={"ThumbNail"}  initialValue={""} onChange={(text) => setStateThumbNail(text)} />
              <Button title={"Salvar"} onPress={() => salvar() }></Button>
          </View>
        </>
    )

}
const styles = StyleSheet.create({
    viewStyle: {
        marginTop: 40,
        padding: 20
    }
})
export default NewShowScreen;