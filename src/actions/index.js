//RECORDER
export const SET_BLOB = "SET_BLOB"
export const setBlob = (blob) => {
    return {
        type: SET_BLOB, 
        payload: blob
    }
}
