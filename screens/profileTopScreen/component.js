
import React, {Component} from "react";

import {View,Text, TouchableOpacity,TouchableWithoutFeedback} from "react-native";
import {Svg,ClipPath,Polygon,Defs,Image,Rect,} from "react-native-svg";

const url = "https://cdn.iconscout.com/icon/free/png-512/404-page-not-found-456876.png";
import styles from "./profileTopStyle";

import AddStatusIcon from "../../component/statusAddIcon"
import StatusDots from "../../component/statusDots";



const NameBio = ()=>{
    return <View>
        <View>
            <Text  style={styles.nameText}>Byung Ho</Text>
        </View>

        <View >
            <Text style={styles.descText}>Photographer</Text>
        </View>

        <View >
            <Text style={styles.descText}>www.hoarts.comm</Text>
        </View>
    </View>
}

const renderStatusIcon = (status,onAddStatus) => {
          
    if(status == null){
      return <View style={styles.plusSign}>
          <TouchableOpacity onPress={onAddStatus}>
                      
                      <AddStatusIcon/>
                      
              </TouchableOpacity>
              </View>
    }

    else{
      if(status && status.statusSeen == false){
          return <View style={styles.threeDots}>
          <StatusDots/>
          </View>
      }
      else{
          return <View/>
              
      }

    }
}

const renderFileUri = (fileUri) => {

    if (fileUri != null) {
      return <Image
        href={{ uri: fileUri }}
        clipPath="#clipImg"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        
      />
    } else {
        return <Image href={{ uri: url}}   
        clipPath="#clipImg"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        />
    }
  }


const renderStatusColor = (status) => {
    if(status==null){
        return "white";
    }
    else if(status && status.statusSeen == false){
        return "orange";
    }
    else if(status && status.statusSeen == true){
        return "grey";
    }
    return "green";
}

const sketchAvatar = (w,n) => {

    var lower =  -10;    // Lower variance
    var upper =  10;     // Upper variance
  
    var points = "";
  
    for(var i=0;i<n;i++){
      points +=  (( w / 2) * (1 + Math.cos((2 * Math.PI * i / n)))).toString() + ","+  ((w / 2) * (1 + Math.sin((2 * Math.PI * i / n)))).toString()+" ";
    } 
    return points;
  }


const svgBuilder = (image,status) => {
    return <View>
        <View style={styles.imageBackground}>
        <Svg height="170" width="170" viewBox="0 0 170 170">
            <Defs>
                <ClipPath id="clipBack">
                    <Polygon points={sketchAvatar(170,10)} />
                </ClipPath>
            </Defs>
            <Rect height="170" width="170"  fill = {renderStatusColor(status)} clipPath="#clipBack" /> 
        </Svg>
    </View>

    <View style={styles.imageBackgroundWhite}>
        <Svg height="170" width="170" viewBox="0 0 170 170">
            <Defs>
                <ClipPath id="clipBack">
                    <Polygon points={sketchAvatar(160,10)} />
                </ClipPath>
            </Defs>
            <Rect height="170" width="170"  fill = "white" clipPath="#clipBack" /> 
        </Svg>
    </View>

    <View style={styles.imageForeground}>
        <Svg height="170" width="170" viewBox="0 0 170 170">
            <Defs>
                <ClipPath id="clipImg">
                    <Polygon height="160" width="160" points={sketchAvatar(155,10)} />
                </ClipPath>
            </Defs>
            {renderFileUri(image)}
        </Svg>
    </View>

    </View>
}

export {
    NameBio,
    renderStatusIcon,
    renderFileUri,
    renderStatusColor,
    sketchAvatar,
    svgBuilder

};