import {combineReducers} from "redux";

import imageReducer from "./imageReducer";
import errorReducer from "./errorReducer";
import statusReducer from "./statusReducer";

const rootReducer =  combineReducers({
    image : imageReducer,
    error : errorReducer,
    status : statusReducer
});

export default rootReducer;
