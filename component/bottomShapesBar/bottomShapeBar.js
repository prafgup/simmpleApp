import React from "react";
import {StyleSheet,View,Text} from "react-native";



class BottomFancyBar extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.LineView}>
                </View>
                <View style={styles.CircleShapeView}>
                </View>
                <View style={styles.SquareShapeView}>
                </View>
                <View style={styles.TriangleShapeView}>
                </View>
                
            </View>
        );
    }
}

const shapeSize = 45;
const shapeColor = "orange";

const styles = StyleSheet.create({


    container:{
        position: "relative",
        justifyContent:"center",
        alignContent:"center",

    },

    CircleShapeView: {
        width: shapeSize,
        height: shapeSize,
        borderRadius: shapeSize / 2,
        backgroundColor: 'white',
        alignContent:"center",
        marginLeft: "auto",
        marginRight:"auto",
        borderColor: shapeColor,
        borderWidth: 2,
     },
     img:{
     },
     SquareShapeView: {
        position:"relative",
        top: -5,
        width: shapeSize,
        height: shapeSize,
        backgroundColor: shapeColor,
        marginLeft: "10%",
    
     },
     TriangleShapeView: {
        width: 0,
        height: 0,
        borderLeftWidth: shapeSize/2,
        borderRightWidth: shapeSize/2,
        borderBottomWidth: shapeSize,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: shapeColor,
        position:"absolute",
        top:shapeSize-5,
        right:"10%",
     },

     LineView:{
        position:"absolute",
        top: shapeSize-20,
        width: "100%",
        height: 0,
        borderWidth:1,
        borderColor:shapeColor
     }
});


export default BottomFancyBar;