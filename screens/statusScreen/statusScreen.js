import React, {Component} from "react";
import {View,Text,Button} from "react-native";
import ProgressBar from "../../component/progressBar"

class StatusScreen extends React.Component{

    status = null;


    timeout = null;

    componentDidMount(){
        this.status = this.props.navigation.getParam("status");
        console.log(this.status);
        this.timeout = setTimeout(this.goBackToProfile.bind(this),5000);
    }
    
    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    goBackToProfile(){
        console.log("HELLO");
        console.log(this.props);
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View>
                <ProgressBar/>
                <Button title="hello " onPress={()=>{this.goBackToProfile()}}>StatusScreen</Button>
            </View>
        );
    }
}


export default StatusScreen;