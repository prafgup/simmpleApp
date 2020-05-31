import {IMAGES} from "../constants/index";


const initialState = "https://cdn.iconscout.com/icon/free/png-512/404-page-not-found-456876.png";

const imageReducer = (state = initialState,action) =>{
    if(action.type == IMAGES.LOAD_PASS){
        return action.imageUri
    }
    if(action.type == IMAGES.DELETE){
        return initialState
    }
    return state;

}

export default imageReducer;
