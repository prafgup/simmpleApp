import React from "react";
import Icon from "react-native-vector-icons/dist/FontAwesome"
import {View,StyleSheet} from "react-native";

class AddStatusIcon extends React.Component{


    render(){
        return(
            <View data-test="statusAdd" style={styles.container}>
                <View style={styles.CircleShapeView}>
                </View>
                <View style={styles.plusIcon}>
                    <Icon data-test="icon" name="plus" size={17} color="white" />
                </View>
                
            </View>
        );
    }

}



const styles = StyleSheet.create({

    container:{
        width:25,
        height:25,
    },

    plusIcon:{
        position:"relative",
        top:-20,
        left:6
    },
    CircleShapeView: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        backgroundColor: 'orange',
        //alignContent:"center",
     },
})


export default AddStatusIcon;
