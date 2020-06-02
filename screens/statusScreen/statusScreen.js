import React, {Component} from "react";
import {View,Text,Button,Image,StyleSheet} from "react-native";
import ProgressBar from "../../component/progressBar"
import { Colors } from "react-native/Libraries/NewAppScreen";
import styles from "./statusStyle";


class StatusScreen extends React.Component{
    
    timeout = null;

    componentDidMount(){
        this.timeout = setTimeout(this.goBackToProfile.bind(this),5100);
    }
    componentWillUnmount(){
        clearTimeout(this.timeout);
    }
    goBackToProfile(){
        this.props.navigation.goBack();
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View data-test="progressBar" style={styles.progress}>
                    <ProgressBar/>
                </View>
                <View data-test="image" style={styles.imageAndHead}>
                    
                <Image
                    style={styles.imagePic}
                    source={{
                    uri: this.props.navigation.getParam("status").statusImage,
                    }}
                />
                <Text data-test="headline" style={styles.headline}>
                    {this.props.navigation.getParam("status").statusHeadline}
                </Text>
                        
                </View>
                <View data-test="userText" style={styles.statusText}>
                <Text  style={styles.userText}>
                    {this.props.navigation.getParam("status").statusText}
                </Text>
                </View>
                
            </View>
        );
    }
}

export default StatusScreen;