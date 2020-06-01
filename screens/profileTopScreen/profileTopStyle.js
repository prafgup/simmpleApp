import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignContent:"center",
        marginLeft:"auto",
        marginRight:"auto",
        justifyContent:"space-evenly",
        
    },
    plusSign:{
        height:25,
        width:25,
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

    threeDots:{
        position:"absolute",
        right:13,
        bottom:24,
        zIndex:1

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

export default styles;
