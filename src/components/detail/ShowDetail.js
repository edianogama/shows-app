import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { AppContext } from '../../context/AppContext';


const ShowDetail = () => {
    const  {state}  = useContext(AppContext);
    const {name, country,image_thumbnail_path, network} = state.showList.filter( item=> item.id === state.itemSelected)[0] ;
    // const {name, country, network} = state.showList.filter(item=>item.id===state.itemSelected)[0];
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
        flex:1,
        paddingTop: 20,
        paddingLeft: 50,
        paddingRight: 50,
        flexDirection: "row",
        justifyContent:"space-evenly",
    },
    boxContainStyle: {
        backgroundColor: "#f6f6f6",
    },
    pictureStyle : {
        flex: 1,
        width: 300,
        height: 200
    }
});

export default ShowDetail;