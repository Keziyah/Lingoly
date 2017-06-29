import axios from 'axios'

//RECORDER
export const SET_BLOB = "SET_BLOB"
export const setBlob = (blob) => {
    return {
        type: SET_BLOB, 
        payload: blob
    }
}

//SpeechWriter
export const UPDATE_DRAFT = "UPDATE_DRAFT"
export const updateDraft = (draft) => {
    return {
        type: UPDATE_DRAFT, 
        payload: draft
    }
}

//Grammar
export const CORRECT_GRAMMAR = "CORRECT_GRAMMAR"

export const correctGrammar = (text) => {
    return dispatch => {
        axios.get('https://languagetool.org/api/v2/check?text=' + text + '&language=en')
        .then(res => dispatch(corrected(res.data.matches)))
        .catch(console.error)
    }
}

export const corrected = (res) => {
    return {
        type: CORRECT_GRAMMAR, 
        payload: res
    }
}
