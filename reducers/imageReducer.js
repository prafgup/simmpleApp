import {IMAGES} from "../constants/index";


const initialState = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";

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
