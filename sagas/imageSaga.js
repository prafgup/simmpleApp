import {delay, takeEvery ,takeLatest , put,call,select,fork} from "redux-saga/effects";

import {IMAGES} from "../constants/index";

import {loadPass,loadFail,deleteImage} from "../actions";

import ImagePicker from "react-native-image-picker";

export const photoPick = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Delete Image' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      
    };

    return new Promise(((resolve, reject) => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                reject('User cancelled image picker');
            } else if (response.error) {
                reject('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                const source = {delete:true , uri :null}
                resolve(source);
            } else {
                const source = {delete: false , uri: response.uri};
                resolve(source);
            }
        })
    }))
}

export function* handleImageLoad(){

    console.log("init Image Choose");

      try{
        const resp = yield call(photoPick);
        
        if(resp.uri != null){
            yield put(loadPass(resp.uri));
        }
        if(resp.delete == true){
            yield put(deleteImage());
        }
      }
      catch (error){
          yield put(loadFail(error));
      }
}

export default function* watchImageLoad(){
    yield takeLatest(IMAGES.LOAD,handleImageLoad);
}