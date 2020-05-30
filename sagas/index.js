import {all,fork} from "redux-saga/effects";
import profileSaga from "./profileSaga";




export function* rootSaga(){
    yield all([
        profileSaga(),
    ]);
}