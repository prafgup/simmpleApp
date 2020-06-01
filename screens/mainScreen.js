import React, {Component} from "react";

import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity} 
    from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


import BottomFancyBar from "../component/bottomShapesBar/index";
import ProfileTopScreen from "./profileTopScreen/index"
import AppBar from "../component/appBar";



class MainScreen extends React.Component{
    render () {
        return(
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.appBar}>
                    <AppBar/>
                </View>
                <View style={styles.topContainer}>
                    <ProfileTopScreen/>
                </View>
                <View style={styles.bottomContainer}>
                    <BottomFancyBar/>
                </View>
            </SafeAreaView>
        );

    }
}

const styles = StyleSheet.create({
    mainContainer :{
        flex : 1,
        justifyContent: "center",
        alignContent: "center",
    },
    topContainer:{
        flex:100,
        //backgroundColor: 'red'
    },
    bottomContainer:{
        flex:30,
    },
    appBar:{
        flex:10
    }

    }
)

export default MainScreen;

  