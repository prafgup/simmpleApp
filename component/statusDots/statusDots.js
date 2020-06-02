import React from "react";
import Icon from "react-native-vector-icons/dist/FontAwesome"
import {View,StyleSheet} from "react-native";

class StatusDots extends React.Component{
    render(){
        return(
            <View  style={styles.container}>
                <View data-test="dots" style={styles.CircleShapeView}>
                </View>
                <View data-test="dots" style={styles.CircleShapeView}>
                </View>
                <View data-test="dots" style={styles.CircleShapeView}>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    container:{
         width:70,
         height:25,
        //backgroundColor:"green",
        flexDirection:"row",
    },
    CircleShapeView: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: 'orange',
        borderColor:"white",
        borderWidth: 3,
        marginLeft:8,
     },
})


export default StatusDots;
