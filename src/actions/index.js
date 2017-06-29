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

//Save(d) Speeches
export const SAVE_SPEECH = "SAVE_SPEECH"
export const GET_SPEECHES = "GET_SPEECH"

export const saveSpeech = (text) => {
        return dispatch => {
        axios.post('/api/speeches', {content: text})
        .then(res => console.log(res.data))
        .catch(console.error)
    }
}

export const getSpeeches = () => {
    return dispatch => {
        axios.get('/api/speeches')
            .then(res => dispatch(allSpeeches(res.data)))
            .catch(console.error)
    }
}

export const allSpeeches = (res) => {
    return {
        type: GET_SPEECHES,  
        payload: res
    }
}

//DICTIONARY

export const FIND_WORD = "FIND_WORD"

export const findWord = (word) => {
    const wordData = {word: word}
    
    return dispatch => {
        axios.get('http://www.dictionaryapi.com/api/v1/references/learners/xml/' + word + '?key=67fa1c28-f1ac-4b66-a206-90aa0dcf2d34')
            .then(res => {
                const wavFile = res.data.match(/<wav>(.+?)<\/wav>/)[1]
                wordData.audiosrc = 'http://media.merriam-webster.com/soundc11/' + wavFile[0] + '/' + wavFile
                wordData.pron = this.state.data.match(/<pr>(.+?)<\/pr>/)[1]

                return dispatch(setWord(wordData))
            })
            .catch(console.error)
    }
}

export const setWord = (data) => {
    return {
        type: FIND_WORD, 
        payload: data
    }
}
