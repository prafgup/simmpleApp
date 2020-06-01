import {createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ProfileScreen from "../screens/mainScreen";
import StatusScreen from "../screens/statusScreen/statusScreen";


const screens = {
    Profile: {
        screen : ProfileScreen,
        navigationOptions: {
            headerShown: false, 
        },
    },
    Status:{
        screen: StatusScreen
    }
}

const ProfileStack = createStackNavigator(screens);

export default createAppContainer(ProfileStack);

