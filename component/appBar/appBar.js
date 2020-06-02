import React , {Component} from "react";
import {View,Text,StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

class AppBar extends React.Component{


    render(){
        return(
            <View  style={styles.appBar}>
                <Icon data-test="appBar" name="angle-left" size={30} color="orange" />
                <Icon data-test="appBar" name="bars" size={30} color="orange" />
            </View>
        );
    }

}



const styles = StyleSheet.create({

        appBar:{
            flex:1,
            flexDirection:"row",
            justifyContent:"space-between",
            alignContent:"center",
            
            marginLeft:20,
            marginRight:20,
            marginTop:10
        }

    }
);




export default AppBar;
