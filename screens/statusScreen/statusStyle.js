import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2c405a",
    },
    progress:{
        flex:20,
        alignContent:"center",
        justifyContent:"center"
    },
    imageAndHead:{
        flex:100,
        alignContent:"center",
        justifyContent:"space-evenly",
    },
    headline:{
        color:"white",
        marginLeft:"auto",
        marginRight:"auto",
        color: "white",
        fontSize:20,
        fontFamily:'sans-serif-light'
    },

    imagePic:{
        marginLeft:"auto",
        marginRight:"auto",
        width: "85%",
        height: "70%",
        borderRadius:20,
    },

    statusText:{
        flex:130,
        alignContent:"center",
        justifyContent:"center"
    },

    userText:{
        color:"white",
        marginLeft:"auto",
        marginRight:"auto",
        fontWeight:"bold",
        color: "white",
        fontSize:30,
        fontFamily:'sans-serif-light',
        textAlign:"center"
    }
});



export default styles;