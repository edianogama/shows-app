import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { AppContext } from '../../context/AppContext';


const ShowDetail = () => {
    const  {state}  = useContext(AppContext);
    const {name, country,image_thumbnail_path, network} = state.showList.find( item=> item.id === state.itemSelected);
    console.log(image_thumbnail_path);
    return (
        <>
          <View style={ styles.viewStyle }>
                <View style={styles.boxContainStyle}>
                    <Text>Nome: {name}</Text>
                    <Text>País: {country}</Text>
                    <Text>Network: {network}</Text>
                </View>
                <Image 
                resizeMode={"contain"}
                    style={styles.pictureStyle}
                source={{uri: image_thumbnail_path } } />

          </View>
        </>
    );
}
const styles = StyleSheet.create({
    viewStyle: {
        paddingTop: 20,

        paddingLeft: 10,
        paddingRight: 20,
        flexDirection: "row",
        justifyContent:"space-between",
    },
    boxContainStyle: {
        backgroundColor: "#f6f6f6",
        minWidth:200,
    },
    pictureStyle : {
        width: 200,
        height: 200
    }
});

export default ShowDetail;