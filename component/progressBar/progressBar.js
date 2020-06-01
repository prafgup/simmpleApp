import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';  


class ProgressBar extends React.Component {  
    state={  
        progressStatus: 0,  
    }  
    anim = new Animated.Value(0,useNativeDriver=true); 
    animation = Animated.timing(this.anim,{  
        toValue: 100,  
        duration: 5000,  
        useNativeDriver:true,
   }); 
    componentDidMount(){  
        this.onAnimate();  
    }  
    componentWillUnmount(){
        this.animation.stop();
        this.anim.removeAllListeners();
    }
    onAnimate = () =>{  
        this.anim.addListener(({value})=> {  
            this.setState({progressStatus: parseInt(value,10)});  
        });  
        this.animation.start();  
    }
  render() {  
    return (  
      <View style={styles.container}>  
            <Animated.View  
                style={[  
                    styles.inner,{width: this.state.progressStatus +"%"},  
                ]}  
            />  
      </View>  
    );  
  }  
} 
const styles = StyleSheet.create({  
    container: { 
    width: "90%",  
    height: 6,  
    padding: 0,  
    borderColor: "white",  
    borderWidth: 1,  
    borderRadius: 5,  
    justifyContent: "center",
    left:"5%",
    right:"5%"
  },  
  inner:{  
    width: "100%",  
    height: "100%",  
    borderRadius: 5,  
    backgroundColor:"white",  
  },  
});

export default ProgressBar;