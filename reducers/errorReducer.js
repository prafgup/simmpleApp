import {IMAGES} from "../constants/index";


const errorReducer = (state = null,action) =>{
    switch(action.type){
        case IMAGES.LOAD_FAIL:
            return action.error;
        case IMAGES.LOAD_PASS:
        case IMAGES.LOAD:
            return null;
        default:
            return state;
    }
}

export default errorReducer;