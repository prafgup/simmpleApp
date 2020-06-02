import {delay, takeEvery ,takeLatest , put,call,select,fork} from "redux-saga/effects";

import {STATUS} from "../constants/index";
import {statusAdd,statusSeen} from "../actions"


export function* handleStatusAdd(){

    console.log("ADDING STATUS");

    
    const imageURI = "https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/GSLV-F11-GSAT-7A-ISRO-1849642898-1545803401.jpg";
    const headline = "ISRO to launch surveillance satellite";
    const text = "SUCH AN AMAZING\nNEWS! YOU MUST\nREAD THIS!";


    const status = {
        statusImage : imageURI,
        statusHeadline : headline,
        statusText: text,
        statusSeen: false,
    }
    yield put(statusAdd(status));

}



export default function* watchStatusLoad(){
    yield takeLatest(STATUS.ON_ADD,handleStatusAdd);
}