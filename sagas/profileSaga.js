import {delay, takeEvery ,takeLatest , put} from "redux-saga/effects";

import {STATUS,PROFILE} from "../constants/index";


export function* test2(){
    yield 1;
    console.log("herererere");
};

export default function* test(){
    yield takeEvery("TEST",test2);
};