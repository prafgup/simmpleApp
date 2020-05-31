
import React, {Component} from "react";
import {connect} from "react-redux";
import {View,Text, TouchableOpacity,StyleSheet,SafeAreaView, TouchableOpacityBase,FlexContainer,Button,TouchableWithoutFeedback} from "react-native";
import {Svg,ClipPath,Polygon,Defs,Image,Rect,} from "react-native-svg";

import ImagePicker from "react-native-image-picker";

import {loadImage,statusSeen,statusOnAdd} from "../../actions";

const url = "https://cdn.iconscout.com/icon/free/png-512/404-page-not-found-456876.png";


import AddStatusIcon from "../../component/statusAddIcon"
import { Colors } from "react-native/Libraries/NewAppScreen";





class ProfileTopScreen extends React.Component{
    
    sketchAvatar(w,n){

        var lower =  -10;    // Lower variance
        var upper =  10;     // Upper variance
      
        var points = "";
      
        for(var i=0;i<n;i++){
          points +=  (( w / 2) * (1 + Math.cos((2 * Math.PI * i / n)))).toString() + ","+  ((w / 2) * (1 + Math.sin((2 * Math.PI * i / n)))).toString()+" ";
        } 
        
        return points;
      }



      renderFileUri(fileUri) {

        if (fileUri != null) {
            
        console.log("Image is not null");
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

      renderStatusIcon(status,onAddStatus){
          console.log("here");
          
          if(status == null){

            return <View style={styles.plusSign}>
                <TouchableOpacity onPress={onAddStatus}>
                            
                            <AddStatusIcon/>
                            
                    </TouchableOpacity>
                    </View>
                
            
          }
      }


    render(){

        const {image,status} = this.props;
        console.log("Props");
        console.log(this.props);


        return(

            <View style={styles.container}>

            <View style={styles.stack}>

            <View style={styles.imageContainer}>
            <TouchableWithoutFeedback onLongPress={this.props.loadImg}>
                <View>
                    <View style={styles.imageBackground}>
                        <Svg height="170" width="170" viewBox="0 0 170 170">
                            <Defs>
                                <ClipPath id="clipBack">
                                    <Polygon points={this.sketchAvatar(170,10)} />
                                </ClipPath>
                            </Defs>
                            <Rect height="170" width="170"  fill = "orange" clipPath="#clipBack" /> 
                        </Svg>
                    </View>

                    <View style={styles.imageBackgroundWhite}>
                        <Svg height="170" width="170" viewBox="0 0 170 170">
                            <Defs>
                                <ClipPath id="clipBack">
                                    <Polygon points={this.sketchAvatar(160,10)} />
                                </ClipPath>
                            </Defs>
                            <Rect height="170" width="170"  fill = "white" clipPath="#clipBack" /> 
                        </Svg>
                    </View>


                    <View style={styles.imageForeground}>
                        <Svg height="170" width="170" viewBox="0 0 170 170">
                            <Defs>
                                <ClipPath id="clipImg">
                                    <Polygon height="160" width="160" points={this.sketchAvatar(155,10)} />
                                </ClipPath>
                            </Defs>
                            {this.renderFileUri(image)}
                        </Svg>
                    </View>

                </View>
            </TouchableWithoutFeedback>
            </View>
           
            {this.renderStatusIcon(status,this.props.addStatus)}
            
            
            </View>

            



            <View>
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

           
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"pink",
        //justifyContent:"center",
        alignContent:"center",
        marginLeft:"auto",
        marginRight:"auto",
        justifyContent:"space-evenly",
        
    },
    plusSign:{
        height:25,
        width:25,
        //backgroundColor: "green",
        position:"absolute",
        right:14,
        bottom:25,
        zIndex:1
    },

    stack:{
        flexDirection:"column",
        marginLeft:"auto",
        marginRight:"auto",
    },

    imageContainer:{
      zIndex:0  
    },

    imageBackground:{
       
    },

    imageBackgroundWhite:{
       position:"absolute",
       top:5,
       left:5
    },
    imageForeground:{
        position:"absolute",
        top:7.5,
        left:7.5
    },
    nameText:{
        marginLeft:"auto",
        marginRight:"auto",
        fontWeight:"bold",
        color: "grey",
        fontSize:22,
        fontFamily:'Open Sans'
    },
    descText:{
        marginLeft:"auto",
        marginRight:"auto",
        fontWeight:"100",
        color: "grey",
        fontSize:14
    }
});


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) =>{
    console.log('State:');
    console.log(state);

    const {image,error,status} = state;

    return {
        //var : state.counterReducer.var
        image,
        error,
        status,
    };

}

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispachToProps = (dispach) => {
    //Action
    return {
        //seen function
        loadImg: ()=> {
            console.log("dispatching");
            dispach(loadImage());
        },

        addStatus: ()=> dispach(statusOnAdd()),
        seenStatus: ()=> dispach(statusSeen()),

    }

}



export default connect(mapStateToProps,mapDispachToProps)(ProfileTopScreen);