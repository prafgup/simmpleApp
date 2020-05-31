import {all,fork} from "redux-saga/effects";
import imageSaga from "./imageSaga";
import statusSaga from "./statusSaga";


export function* rootSaga(){
    yield all([
        imageSaga(),
        statusSaga(),
    ]);
}