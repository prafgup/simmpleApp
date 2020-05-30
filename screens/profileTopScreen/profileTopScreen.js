
import React, {Component} from "react";
import {connect} from "react-redux";
import {View,Text, TouchableOpacity} from "react-native";

class ProfileTopScreen extends React.Component{
    render(){
        return(

            <TouchableOpacity onPress = {this.props.testFunc2}>
                <Text>hello000</Text>
            </TouchableOpacity>

        );
    }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) =>{
    console.log('State:');
    console.log(state);

    return {
        //var : state.counterReducer.var
        test:1
        
    }

}

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispachToProps = (dispach) => {
    //Action
    return {
        //seen function
        testFunc: ()=> dispach({
            type: "TEST",
            value: "hello"
        }),

        testFunc2: ()=> dispach({
            type: "TEST",
            value: "hello2"
        })

    }

}

export default connect(mapStateToProps,mapDispachToProps)(ProfileTopScreen);