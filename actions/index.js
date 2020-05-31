import {IMAGES , STATUS } from "../constants";

const loadImage = ()=>{
console.log("loadImage Action");
    return ({
        type:IMAGES.LOAD
    });

};

const deleteImage = ()=>{
    console.log("deleteImage Action");
        return ({
            type : IMAGES.DELETE
        });
    };

const loadPass = (imageUri)=>({
    type:IMAGES.LOAD_PASS,
    imageUri,
});

const loadFail = (error)=>({
    type:IMAGES.LOAD_FAIL,
    error,
});


const statusAdd = (status) =>({
    type : STATUS.ADD,
    status,
});

const statusOnAdd = () =>({
    type : STATUS.ON_ADD,
});


const statusSeen = () => ({
    type : STATUS.SEEN
});




export {
    loadFail,
    loadImage,
    loadPass,
    deleteImage,
    statusAdd,
    statusSeen,
    statusOnAdd
};