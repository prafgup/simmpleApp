
import React, {Component} from "react";
import {connect} from "react-redux";
import {View,Text, TouchableOpacity,TouchableWithoutFeedback} from "react-native";
import {Svg,ClipPath,Polygon,Defs,Image,Rect,} from "react-native-svg";

import {loadImage,statusSeen,statusOnAdd} from "../../actions";

import styles from "./profileTopStyle";

import {NameBio,renderStatusIcon,svgBuilder} from "./component";

class ProfileTopScreen extends React.Component{
    


      goToStackScreen(status){
          this.props.seenStatus();
          if(status != null){
            this.props.navigation.push("Status",{
                status:status
            });
          }
      }


    render(){

        const {image,status} = this.props;

        return(

            <View style={styles.container}>

            <View style={styles.stack}>

            <View style={styles.imageContainer}>
            <TouchableWithoutFeedback onLongPress={this.props.loadImg} onPress={()=>{this.goToStackScreen(this.props.status)}}>
                {svgBuilder(image,status)}
            </TouchableWithoutFeedback>
            </View>
           
            {renderStatusIcon(status,this.props.addStatus)}
            
            </View>
                {NameBio()}           
            </View>

        );
    }
}

const mapStateToProps = (state) =>{

    const {image,error,status} = state;

    return {
        image,
        error,
        status,
    };

}

const mapDispachToProps = (dispach) => {
    return {
        loadImg: ()=> {
            dispach(loadImage());
        },

        addStatus: ()=> dispach(statusOnAdd()),
        seenStatus: ()=> dispach(statusSeen()),

    }

}



export default connect(mapStateToProps,mapDispachToProps)(ProfileTopScreen);