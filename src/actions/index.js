//RECORDER
export const SET_BLOB = "SET_BLOB"
export const setBlob = (blob) => {
    return {
        type: SET_BLOB, 
        payload: blob
    }
}

export const UPDATE_DRAFT = "UPDATE_DRAFT"
export const updateDraft = (draft) => {
    return {
        type: UPDATE_DRAFT, 
        payload: draft
    }
}
