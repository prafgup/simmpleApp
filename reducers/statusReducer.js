import {STATUS} from "../constants/index";




const statusReducer = (state = null,action) =>{
    if(action.type == STATUS.ADD){
        return {
            statusImage : action.status.statusImage,
            statusHeadline : action.status.statusHeadline,
            statusText: action.status.statusText,
            statusSeen: false,
        }
    }
    if(action.type == STATUS.SEEN){
        return {
            ...state ,
            statusSeen: true
        }
    }
    return state;
}

export default statusReducer;